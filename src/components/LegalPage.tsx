import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedPagePath, type Locale, type PageKind } from "@/i18n/config";

type LegalPageProps = {
  dictionary: Dictionary;
  locale: Locale;
  page: Extract<PageKind, "impressum" | "datenschutz">;
};

export function LegalPage({ dictionary, locale, page }: LegalPageProps) {
  const content = dictionary.legal[page];

  return (
    <>
      <SiteNav dictionary={dictionary} locale={locale} page={page} />
      <main className="min-h-screen bg-ivory px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <article className="mx-auto max-w-4xl rounded-lg border border-champagne/50 bg-warm-white p-6 shadow-soft sm:p-10">
          <Link
            href={localizedPagePath(locale, "home")}
            className="inline-flex items-center gap-2 text-sm text-taupe transition hover:text-soft-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {dictionary.legal.backHome}
          </Link>
          <h1 className="mt-10 font-display text-5xl leading-tight text-charcoal sm:text-6xl">
            {content.title}
          </h1>
          {content.intro ? (
            <p className="mt-5 text-lg leading-8 text-charcoal-soft/78">{content.intro}</p>
          ) : null}

          <div className="mt-10 grid gap-7">
            {content.sections.map((section) => (
              <section key={section.title} className="border-t border-champagne/45 pt-7">
                <h2 className="font-display text-3xl text-charcoal">{section.title}</h2>
                <div className="mt-4 grid gap-2 text-charcoal-soft/80">
                  {section.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
