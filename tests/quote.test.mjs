import assert from "node:assert/strict";
import { test } from "node:test";
import {
  identity,
  languages,
  serviceIds,
} from "../client/src/content/portfolio.ts";
import {
  createQuoteDraft,
  quoteCopy,
  quoteLimits,
  validateQuote,
} from "../client/src/lib/quote.ts";

const blank = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  description: "",
  investment: "",
  deadline: "",
};
const valid = {
  ...blank,
  name: "Ana",
  email: "ana@example.org",
  service: "web",
  description: "Um site para divulgar meu trabalho.",
};

test("flags every missing required field and rejects an unknown service", () => {
  assert.deepEqual(validateQuote(blank).errors, {
    name: "required",
    email: "required",
    description: "required",
    service: "service",
  });
  assert.equal(
    validateQuote({ ...valid, service: "unknown" }).errors.service,
    "service"
  );
  assert.deepEqual(validateQuote({ ...valid, service: "other" }).errors, {});
});

test("normalizes user input and validates email and maximum lengths", () => {
  const result = validateQuote({
    ...valid,
    name: " Ana  ",
    email: "ana@ex ample.org",
    description: "a".repeat(quoteLimits.description + 1),
  });
  assert.equal(result.values.name, "Ana");
  assert.deepEqual(result.errors, { description: "tooLong", email: "email" });
  assert.deepEqual(
    validateQuote({
      ...valid,
      description: "a".repeat(quoteLimits.description),
    }).errors,
    {}
  );
});

test("localizes services and leaves empty optional fields out of the draft", () => {
  for (const locale of ["pt", "en"]) {
    for (const service of serviceIds) {
      const draft = createQuoteDraft({ ...valid, service }, locale);
      assert.ok(draft.body.includes(languages[locale].services[service].title));
      assert.ok(!draft.body.includes(quoteCopy[locale].fields.phone));
      assert.ok(draft.href.startsWith(`mailto:${identity.email}?`));
    }
  }
});

test("keeps arbitrary text inside the body and preserves the configured recipient", () => {
  const text = "Olá! É sobre sites.\n&cc=other@example.org";
  const draft = createQuoteDraft({ ...valid, description: text }, "pt");
  const url = new URL(draft.href);

  assert.equal(url.pathname, identity.email);
  assert.deepEqual([...url.searchParams.keys()], ["subject", "body"]);
  assert.ok(url.searchParams.get("body").includes(text.replace("\n", "\r\n")));
  assert.doesNotThrow(() =>
    createQuoteDraft({ ...valid, description: "\uD800" }, "pt")
  );
});
