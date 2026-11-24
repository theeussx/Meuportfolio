import {
  identity,
  languages,
  serviceIds,
  type Language,
  type ServiceId,
} from "../content/portfolio.ts";

export const quoteFields = [
  "name",
  "email",
  "company",
  "phone",
  "service",
  "description",
  "investment",
  "deadline",
] as const;
export type QuoteField = (typeof quoteFields)[number];
type QuoteInput = Record<QuoteField, string>;
type QuoteErrors = Partial<
  Record<QuoteField, "required" | "email" | "tooLong" | "service">
>;

export const quoteLimits: Record<QuoteField, number> = {
  name: 90,
  email: 120,
  company: 90,
  phone: 40,
  service: 40,
  description: 650,
  investment: 70,
  deadline: 70,
};

export const quoteCopy = {
  pt: {
    fields: {
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      phone: "WhatsApp",
      service: "Tipo de projeto",
      description: "O que você precisa?",
      investment: "Faixa de investimento",
      deadline: "Prazo desejado",
    },
    optional: "opcional",
    choose: "Selecione o tipo de projeto",
    other: "Outro / Ainda estou definindo",
    describe: "Conte o objetivo, o que já existe e o que precisa mudar.",
    prepare: "Preparar e-mail",
    ready: "Seu briefing está pronto.",
    instructions:
      "Seu aplicativo de e-mail abre com o texto preenchido. Revise e envie por lá ou copie o briefing.",
    open: "Abrir aplicativo de e-mail",
    copy: "Copiar briefing",
    copied: "Copiado",
    copyFailed: "Falha ao copiar",
    subject: "Orçamento de projeto pelo portfólio",
    errorTitle: "Revise os campos indicados.",
    errors: {
      required: "Preencha este campo.",
      email: "Informe um e-mail válido.",
      service: "Selecione um tipo de projeto.",
      tooLong: "Reduza o texto deste campo.",
    },
    privacy:
      "O portfólio prepara a mensagem no seu navegador. Seus dados só seguem para Mateus se você enviar o e-mail. Use apenas as informações necessárias para o orçamento.",
  },
  en: {
    fields: {
      name: "Name",
      email: "Email",
      company: "Company",
      phone: "WhatsApp",
      service: "Project type",
      description: "What do you need?",
      investment: "Budget range",
      deadline: "Preferred timeline",
    },
    optional: "optional",
    choose: "Select a project type",
    other: "Other / Still deciding",
    describe:
      "Share the goal, what’s already in place, and what needs to change.",
    prepare: "Prepare email",
    ready: "Your brief is ready.",
    instructions:
      "Open your email app with the draft filled in. Review and send it there, or copy the brief.",
    open: "Open email app",
    copy: "Copy brief",
    copied: "Copied",
    copyFailed: "Couldn’t copy",
    subject: "Project quote request from the portfolio",
    errorTitle: "Check the highlighted fields.",
    errors: {
      required: "Complete this field.",
      email: "Enter a valid email address.",
      service: "Select a project type.",
      tooLong: "Shorten the text in this field.",
    },
    privacy:
      "The portfolio prepares a draft in your browser. Your details only reach Mateus if you send the email. Include only the details needed for the quote.",
  },
} as const;

function isService(value: string): value is ServiceId {
  return serviceIds.some(id => id === value);
}

export function validateQuote(input: QuoteInput): {
  values: QuoteInput;
  errors: QuoteErrors;
} {
  const values = { ...input };
  const errors: QuoteErrors = {};

  for (const field of quoteFields) {
    values[field] = input[field].trim();
    if (values[field].length > quoteLimits[field]) errors[field] = "tooLong";
  }

  for (const field of ["name", "email", "description"] as const) {
    if (!values[field]) errors[field] = "required";
  }

  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "email";
  if (!isService(values.service) && values.service !== "other")
    errors.service = "service";

  return { values, errors };
}

export function createQuoteDraft(values: QuoteInput, language: Language) {
  const copy = quoteCopy[language];
  const service = isService(values.service)
    ? languages[language].services[values.service].title
    : copy.other;
  const body = quoteFields
    .flatMap(field => {
      if (!values[field]) return [];
      if (field === "description")
        return [
          `\r\n${copy.fields[field]}\r\n${values[field].replace(/\r?\n/g, "\r\n")}\r\n`,
        ];
      const value =
        field === "service" ? service : values[field].replace(/[\r\n]+/g, " ");
      return [`${copy.fields[field]}: ${value}`];
    })
    .join("\r\n");

  const encodableBody = new TextDecoder("utf-8", { ignoreBOM: true }).decode(
    new TextEncoder().encode(body)
  );
  return {
    body,
    href: `mailto:${identity.email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(encodableBody)}`,
  };
}
