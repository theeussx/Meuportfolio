import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { CopyButton } from "@/components/arc/copy-button/copy-button";
import { Button } from "@/components/ui/button";
import { identity, serviceIds, type ServiceId } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/motion/Reveal";
import {
  createQuoteDraft,
  quoteCopy,
  quoteFields,
  quoteLimits,
  validateQuote,
  type QuoteField,
} from "@/lib/quote";

export type QuotePreset = { service: ServiceId };

export default function Contact({ preset }: { preset: QuotePreset | null }) {
  const { language, t } = useLanguage();
  const copy = quoteCopy[language];
  const [ready, setReady] = useState(false);
  const [selection, setSelection] = useState<ServiceId | "other" | "">("");
  const [errors, setErrors] = useState<
    ReturnType<typeof validateQuote>["errors"]
  >({});
  const [values, setValues] = useState<
    ReturnType<typeof validateQuote>["values"] | null
  >(null);
  const form = useRef<HTMLFormElement>(null);
  const prepared = useRef<HTMLHeadingElement>(null);
  const invalid = useRef<QuoteField | null>(null);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (!preset) return;
    setSelection(preset.service);
    setValues(null);
    setErrors(previous => ({ ...previous, service: undefined }));
  }, [preset]);

  useEffect(() => {
    if (invalid.current) {
      const field = form.current?.elements.namedItem(invalid.current);
      if (field instanceof HTMLElement) field.focus();
      invalid.current = null;
    }
  }, [errors]);

  useEffect(() => {
    if (values) prepared.current?.focus();
  }, [values]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const input = {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      description: "",
      investment: "",
      deadline: "",
    };
    for (const field of quoteFields)
      input[field] = String(data.get(field) ?? "");
    const result = validateQuote(input);
    invalid.current = quoteFields.find(field => result.errors[field]) ?? null;
    setErrors(result.errors);
    setValues(invalid.current ? null : result.values);
  }

  function descriptions(field: QuoteField) {
    const ids = [
      field === "description" ? "quote-description-hint" : "",
      errors[field] ? `quote-${field}-error` : "",
    ].filter(Boolean);
    return ids.join(" ") || undefined;
  }

  function errorText(field: QuoteField) {
    const error = errors[field];
    return (
      error && (
        <span className="field-error" id={`quote-${field}-error`}>
          {copy.errors[error]}
        </span>
      )
    );
  }

  function input(
    field: Exclude<QuoteField, "service" | "description">,
    autocomplete?: string,
    type = "text"
  ) {
    const required = field === "name" || field === "email";
    return (
      <div className="field">
        <label htmlFor={`quote-${field}`}>
          {copy.fields[field]} {!required && <small>{copy.optional}</small>}
        </label>
        <input
          id={`quote-${field}`}
          name={field}
          type={type}
          autoComplete={autocomplete}
          required={required}
          maxLength={quoteLimits[field]}
          aria-invalid={errors[field] ? true : undefined}
          aria-describedby={descriptions(field)}
        />
        {errorText(field)}
      </div>
    );
  }

  const draft = values && createQuoteDraft(values, language);

  return (
    <section
      id="contato"
      className="section contact-section"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="shell contact-layout">
        <Reveal className="contact-intro" delay={40}>
          <p className="eyebrow">{t.contactLabel}</p>
          <h2 id="contact-title">
            {t.contactTitle[0]}
            <br />
            {t.contactTitle[1]}
          </h2>
          <p>{t.contactCopy}</p>
          <div className="direct-email">
            <p>{t.contactFallback}</p>
            <div>
              <a className="link" href={`mailto:${identity.email}`}>
                <Mail size={17} aria-hidden="true" />
                {identity.email}
              </a>
              <CopyButton
                value={identity.email}
                label={t.emailCopy}
                copiedLabel={copy.copied}
                failedLabel={copy.copyFailed}
                iconOnly
                variant="plain"
                className="icon-action"
                disabled={!ready}
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <form
            ref={form}
            className="quote-form"
            method="post"
            noValidate
            onSubmit={submit}
            onChange={() => {
              if (values) setValues(null);
            }}
            aria-label={t.request}
            aria-describedby="privacidade"
          >
            <fieldset className="quote-fields" disabled={!ready}>
              <div className="quote-grid">
                {input("name", "name")}
                {input("email", "email", "email")}
                {input("company", "organization")}
                {input("phone", "tel", "tel")}
                <div className="field field-wide">
                  <label htmlFor="quote-service">{copy.fields.service}</label>
                  <select
                    id="quote-service"
                    name="service"
                    value={selection}
                    required
                    onChange={event => {
                      const next = event.currentTarget.value;
                      setSelection(
                        serviceIds.find(id => id === next) ??
                          (next === "other" ? "other" : "")
                      );
                    }}
                    aria-invalid={errors.service ? true : undefined}
                    aria-describedby={descriptions("service")}
                  >
                    <option value="">{copy.choose}</option>
                    {serviceIds.map(id => (
                      <option key={id} value={id}>
                        {t.services[id].title}
                      </option>
                    ))}
                    <option value="other">{copy.other}</option>
                  </select>
                  {errorText("service")}
                </div>
                <div className="field field-wide">
                  <label htmlFor="quote-description">
                    {copy.fields.description}
                  </label>
                  <textarea
                    id="quote-description"
                    name="description"
                    rows={4}
                    required
                    maxLength={quoteLimits.description}
                    aria-invalid={errors.description ? true : undefined}
                    aria-describedby={descriptions("description")}
                  />
                  <span className="field-hint" id="quote-description-hint">
                    {copy.describe}
                  </span>
                  {errorText("description")}
                </div>
                {input("investment")}
                {input("deadline")}
              </div>
              {Object.values(errors).some(Boolean) && (
                <p className="field-error" role="status">
                  {copy.errorTitle}
                </p>
              )}
              <Button className="button button-primary" type="submit">
                {copy.prepare}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
            </fieldset>
            {draft && (
              <div className="quote-ready">
                <h3 ref={prepared} tabIndex={-1}>
                  {copy.ready}
                </h3>
                <p>{copy.instructions}</p>
                <div className="quote-actions">
                  <a className="button button-outline" href={draft.href}>
                    {copy.open}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <CopyButton
                    value={draft.body}
                    label={copy.copy}
                    copiedLabel={copy.copied}
                    failedLabel={copy.copyFailed}
                    variant="plain"
                    className="button"
                  />
                </div>
              </div>
            )}
          </form>
          <p className="privacy-note" id="privacidade">
            {copy.privacy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
