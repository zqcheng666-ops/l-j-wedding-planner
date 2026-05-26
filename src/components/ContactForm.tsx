"use client";

import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type ContactFormProps = {
  dictionary: Dictionary["contact"];
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ dictionary }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      weddingDate: String(formData.get("weddingDate") || ""),
      location: String(formData.get("location") || ""),
      guestCount: String(formData.get("guestCount") || ""),
      budgetRange: String(formData.get("budgetRange") || ""),
      serviceNeed: String(formData.get("serviceNeed") || ""),
      preferredLanguage: String(formData.get("preferredLanguage") || ""),
      message: String(formData.get("message") || ""),
      gdprConsent: formData.get("gdprConsent") === "on",
      website: String(formData.get("website") || "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        setSubmitState("error");
        return;
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-lg border border-champagne/45 bg-warm-white p-5 shadow-soft sm:p-7"
    >
      <p className="mb-6 text-sm text-charcoal-soft/70">{dictionary.requiredNote}</p>

      {submitState === "success" ? (
        <div className="mb-6 rounded-lg border border-soft-gold/30 bg-ivory p-4 text-charcoal">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-soft-gold" aria-hidden="true" />
            <div>
              <p className="font-medium">{dictionary.successTitle}</p>
              <p className="mt-1 text-sm text-charcoal-soft/75">{dictionary.successText}</p>
            </div>
          </div>
        </div>
      ) : null}

      {submitState === "error" ? (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-950">
          <div className="flex gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
            <div>
              <p className="font-medium">{dictionary.errorTitle}</p>
              <p className="mt-1 text-sm">{dictionary.errorText}</p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          {dictionary.honeypot}
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={dictionary.fields.name.label} required>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder={dictionary.fields.name.placeholder}
            className="field-input"
          />
        </Field>

        <Field label={dictionary.fields.email.label} required>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder={dictionary.fields.email.placeholder}
            className="field-input"
          />
        </Field>

        <Field label={dictionary.fields.phone.label}>
          <input
            name="phone"
            autoComplete="tel"
            placeholder={dictionary.fields.phone.placeholder}
            className="field-input"
          />
        </Field>

        <Field label={dictionary.fields.weddingDate.label}>
          <input type="date" name="weddingDate" className="field-input" />
        </Field>

        <Field label={dictionary.fields.location.label}>
          <input
            name="location"
            placeholder={dictionary.fields.location.placeholder}
            className="field-input"
          />
        </Field>

        <Field label={dictionary.fields.guestCount.label}>
          <input
            type="number"
            min="1"
            name="guestCount"
            placeholder={dictionary.fields.guestCount.placeholder}
            className="field-input"
          />
        </Field>

        <Field label={dictionary.fields.budgetRange.label}>
          <select name="budgetRange" className="field-input">
            <option value="">{dictionary.fields.budgetRange.placeholder}</option>
            {dictionary.budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label={dictionary.fields.serviceNeed.label}>
          <select name="serviceNeed" className="field-input">
            <option value="">{dictionary.fields.serviceNeed.placeholder}</option>
            {dictionary.serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label={dictionary.fields.preferredLanguage.label} required>
          <select required name="preferredLanguage" className="field-input">
            <option value="">{dictionary.fields.preferredLanguage.placeholder}</option>
            {dictionary.languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label={dictionary.fields.message.label} required>
            <textarea
              required
              name="message"
              rows={5}
              placeholder={dictionary.fields.message.placeholder}
              className="field-input min-h-36 resize-y"
            />
          </Field>
        </div>
      </div>

      <label className="mt-5 flex gap-3 text-sm leading-6 text-charcoal-soft">
        <input
          required
          name="gdprConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-taupe/50 text-soft-gold focus:ring-soft-gold"
        />
        <span>{dictionary.fields.gdprConsent.label}</span>
      </label>

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-medium text-warm-white transition hover:bg-soft-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting" ? dictionary.submitting : dictionary.submit}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-charcoal">
      <span>
        {label}
        {required ? <span className="text-soft-gold"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
