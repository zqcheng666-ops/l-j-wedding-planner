export const locales = ["de", "zh", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export type PageKind = "home" | "impressum" | "datenschutz";

export const localeLabels: Record<Locale, string> = {
  de: "DE",
  zh: "中文",
  en: "EN"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePrefix(locale: Locale) {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function localizedPagePath(locale: Locale, page: PageKind) {
  const prefix = localePrefix(locale);

  if (page === "home") {
    return prefix || "/";
  }

  return `${prefix}/${page}`;
}
