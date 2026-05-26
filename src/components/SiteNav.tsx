"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  localeLabels,
  localizedPagePath,
  locales,
  type Locale,
  type PageKind
} from "@/i18n/config";

type SiteNavProps = {
  dictionary: Dictionary;
  locale: Locale;
  page: PageKind;
};

export function SiteNav({ dictionary, locale, page }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const homePath = localizedPagePath(locale, "home");
  const contactHref = page === "home" ? "#contact" : `${homePath}#contact`;
  const shortBrand = "L&J";

  const getAnchorHref = (id: string) => {
    return page === "home" ? `#${id}` : `${homePath}#${id}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-warm-white/20 bg-charcoal/70 text-warm-white backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href={homePath}
          className="inline-flex min-h-10 items-center font-display text-2xl tracking-normal text-warm-white sm:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <span className="sm:hidden">{shortBrand}</span>
          <span className="hidden sm:inline">{dictionary.nav.brand}</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {dictionary.nav.items.map((item) => (
            <Link
              key={item.id}
              href={getAnchorHref(item.id)}
              className="text-sm text-warm-white/78 transition hover:text-champagne"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="flex items-center rounded-full border border-warm-white/20 bg-warm-white/8 p-1"
            aria-label={dictionary.nav.languageLabel}
          >
            {locales.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={localizedPagePath(targetLocale, page)}
                aria-current={targetLocale === locale ? "page" : undefined}
                className={`inline-flex min-h-9 min-w-10 items-center justify-center rounded-full px-3 text-xs transition ${
                  targetLocale === locale
                    ? "bg-warm-white text-charcoal"
                    : "text-warm-white/70 hover:text-champagne"
                }`}
              >
                {localeLabels[targetLocale]}
              </Link>
            ))}
          </div>

          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-full border border-champagne/60 px-4 py-2 text-sm text-warm-white transition hover:border-champagne hover:bg-champagne hover:text-charcoal"
          >
            {dictionary.nav.consultation}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <div
            className="flex items-center rounded-full border border-warm-white/20 bg-warm-white/8 p-1"
            aria-label={dictionary.nav.languageLabel}
          >
            {locales.map((targetLocale) => (
              <Link
                key={targetLocale}
                href={localizedPagePath(targetLocale, page)}
                aria-current={targetLocale === locale ? "page" : undefined}
                className={`inline-flex min-h-10 min-w-10 items-center justify-center rounded-full px-2.5 text-xs transition ${
                  targetLocale === locale
                    ? "bg-warm-white text-charcoal"
                    : "text-warm-white/70 hover:text-champagne"
                }`}
              >
                {localeLabels[targetLocale]}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm-white/25 text-warm-white transition hover:bg-warm-white hover:text-charcoal"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-warm-white/15 bg-charcoal/95 px-5 py-6 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {dictionary.nav.items.map((item) => (
              <Link
                key={item.id}
                href={getAnchorHref(item.id)}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-warm-white/86 transition hover:bg-warm-white/8 hover:text-champagne"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactHref}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm font-medium text-charcoal transition hover:bg-soft-gold"
            >
              {dictionary.nav.consultation}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
