import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Quote } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SiteNav } from "@/components/SiteNav";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedPagePath, type Locale } from "@/i18n/config";

type LandingPageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function LandingPage({ dictionary, locale }: LandingPageProps) {
  const [featuredInspiration, ...galleryInspiration] = dictionary.portfolio.items;
  const sideInspiration = galleryInspiration.slice(0, 2);
  const balancedInspiration = galleryInspiration.slice(2);

  return (
    <>
      <SiteNav dictionary={dictionary} locale={locale} page="home" />
      <main>
        <section className="relative min-h-[92svh] overflow-hidden bg-charcoal text-warm-white">
          <Image
            src="/images/hero-wedding.jpg"
            alt={dictionary.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80 motion-safe:animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/86 via-charcoal/50 to-charcoal/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/58 via-transparent to-charcoal/26" />

          <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10">
            <div className="max-w-3xl motion-safe:animate-fade-up">
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-champagne sm:text-sm">
                {dictionary.hero.kicker}
              </p>
              <h1 className="text-balance font-display text-[2.75rem] leading-[0.98] text-warm-white sm:text-7xl lg:text-8xl">
                {dictionary.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-warm-white/84 sm:text-xl">
                {dictionary.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3.5 text-sm font-medium text-charcoal transition hover:bg-warm-white"
                >
                  {dictionary.hero.primaryCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/40 px-6 py-3.5 text-sm font-medium text-warm-white transition hover:border-champagne hover:text-champagne"
                >
                  {dictionary.hero.secondaryCta}
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-8 whitespace-pre-line text-sm leading-7 text-warm-white/68">{dictionary.hero.note}</p>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-warm-white/70">
            <ChevronDown className="h-6 w-6" aria-hidden="true" />
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-ivory py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div>
              <SectionHeader
                eyebrow={dictionary.about.eyebrow}
                title={dictionary.about.title}
                align="left"
              />
              <div className="mt-8 grid gap-5 text-base leading-8 text-charcoal-soft sm:text-lg">
                {dictionary.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-5">
              <div className="rounded-lg border border-champagne/55 bg-warm-white p-6 shadow-soft sm:p-8">
                <h3 className="font-display text-3xl text-charcoal">{dictionary.about.asideTitle}</h3>
                <p className="mt-4 leading-7 text-charcoal-soft/78">{dictionary.about.asideText}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {dictionary.about.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 border-b border-champagne/45 py-3 text-sm text-charcoal-soft"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-none text-soft-gold" aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="inspiration" className="scroll-mt-24 bg-warm-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionHeader
                eyebrow={dictionary.portfolio.eyebrow}
                title={dictionary.portfolio.title}
                align="left"
              />
              <p className="max-w-2xl text-base leading-8 text-charcoal-soft/74 lg:justify-self-end">
                {dictionary.portfolio.intro}
              </p>
            </div>
            {featuredInspiration && (
              <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                <PortfolioCard
                  item={featuredInspiration}
                  imageClassName="aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[560px]"
                  imageSizes="(min-width: 1024px) 58vw, 100vw"
                  titleClassName="text-3xl"
                  bodyClassName="p-5 sm:p-6"
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  {sideInspiration.map((item) => (
                    <PortfolioCard
                      key={item.src}
                      item={item}
                      imageClassName="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[16/10]"
                      imageSizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ))}
                </div>
              </div>
            )}
            {balancedInspiration.length > 0 && (
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {balancedInspiration.map((item) => (
                  <PortfolioCard
                    key={item.src}
                    item={item}
                    imageClassName="aspect-[4/5] sm:aspect-[5/4]"
                    imageSizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-charcoal py-20 text-warm-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <SectionHeader
                eyebrow={dictionary.services.eyebrow}
                title={dictionary.services.title}
                align="left"
                tone="dark"
              />
              <p className="max-w-2xl text-base leading-8 text-warm-white/72 lg:justify-self-end">
                {dictionary.services.intro}
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-[640px]">
                <Image
                  src="/images/visual-story.jpg"
                  alt={dictionary.services.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                    {dictionary.services.offeringsLabel}
                  </p>
                  <p className="mt-4 max-w-sm font-display text-4xl leading-tight text-warm-white">
                    {dictionary.services.imageCaption}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between border-y border-warm-white/14">
                {dictionary.services.items.map((service, index) => (
                  <article
                    key={service.title}
                    className="grid gap-5 border-b border-warm-white/14 py-8 last:border-b-0 sm:grid-cols-[5rem_1fr]"
                  >
                    <p className="font-display text-5xl leading-none text-champagne/48">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="font-display text-4xl leading-tight text-warm-white">{service.title}</h3>
                      <p className="mt-2 text-sm text-champagne/72">{service.label}</p>
                      <p className="mt-5 max-w-2xl leading-7 text-warm-white/72">{service.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-10 border-t border-warm-white/14 pt-12 lg:grid-cols-[0.32fr_0.68fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {dictionary.services.experiencesLabel}
                </p>
                <h3 className="mt-4 font-display text-4xl leading-tight text-warm-white">
                  {dictionary.experiences.title}
                </h3>
              </div>
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {dictionary.experiences.items.map((experience) => (
                  <article key={experience.title} className="border-t border-warm-white/14 pt-5">
                    <h4 className="font-display text-2xl text-champagne">{experience.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-warm-white/66">{experience.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-10 border-t border-warm-white/14 pt-12 lg:grid-cols-[0.32fr_0.68fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {dictionary.services.processLabel}
                </p>
                <h3 className="mt-4 font-display text-4xl leading-tight text-warm-white">
                  {dictionary.process.title}
                </h3>
              </div>
              <div className="grid gap-0 border-y border-warm-white/14">
                {dictionary.process.steps.map((step, index) => (
                  <article
                    key={step.title}
                    className="grid gap-4 border-b border-warm-white/14 py-6 last:border-b-0 sm:grid-cols-[4.5rem_1fr]"
                  >
                    <p className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/45 text-sm text-champagne">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h4 className="font-display text-2xl leading-tight text-warm-white">{step.title}</h4>
                      <p className="mt-1 text-sm text-champagne/68">{step.label}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-warm-white/66">{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="moments" className="scroll-mt-24 bg-warm-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <SectionHeader
                eyebrow={dictionary.selectedWeddings.eyebrow}
                title={dictionary.selectedWeddings.title}
                align="left"
              />
              <p className="max-w-2xl text-base leading-8 text-charcoal-soft/74 lg:justify-self-end">
                {dictionary.selectedWeddings.intro}
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {dictionary.selectedWeddings.items.map((item) => (
                <SelectedWeddingCard
                  key={item.title}
                  item={item}
                  labels={dictionary.selectedWeddings.labels}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeader
              eyebrow={dictionary.testimonials.eyebrow}
              title={dictionary.testimonials.title}
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {dictionary.testimonials.items.map((testimonial) => (
                <article key={testimonial.author} className="rounded-lg border border-champagne/55 bg-warm-white p-7">
                  <Quote className="h-7 w-7 text-soft-gold" aria-hidden="true" />
                  <p className="mt-6 text-pretty text-lg leading-8 text-charcoal-soft">
                    {testimonial.quote}
                  </p>
                  <div className="mt-8 border-t border-champagne/45 pt-5">
                    <p className="font-medium text-charcoal">{testimonial.author}</p>
                    <p className="mt-1 text-sm text-taupe">{testimonial.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-warm-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <SectionHeader eyebrow={dictionary.faq.eyebrow} title={dictionary.faq.title} align="left" />
            <div className="grid gap-3">
              {dictionary.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-lg border border-champagne/45 bg-ivory p-5 open:bg-warm-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-charcoal">
                    <span>{item.question}</span>
                    <ChevronDown
                      className="h-5 w-5 flex-none text-soft-gold transition group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 leading-7 text-charcoal-soft/76">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-charcoal py-20 text-warm-white sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
            <div>
              <SectionHeader
                eyebrow={dictionary.contact.eyebrow}
                title={dictionary.contact.title}
                align="left"
                tone="dark"
              />
              <p className="mt-7 max-w-xl text-lg leading-8 text-warm-white/72">
                {dictionary.contact.intro}
              </p>
            </div>
            <ContactForm dictionary={dictionary.contact} />
          </div>
        </section>
      </main>

      <footer className="bg-charcoal px-5 pb-10 text-warm-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-warm-white/15 pt-8 text-sm text-warm-white/70 md:flex-row md:items-center md:justify-between">
          <p>{dictionary.footer.line}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={localizedPagePath(locale, "impressum")}
              className="inline-flex min-h-10 items-center hover:text-champagne"
            >
              {dictionary.footer.impressum}
            </Link>
            <Link
              href={localizedPagePath(locale, "datenschutz")}
              className="inline-flex min-h-10 items-center hover:text-champagne"
            >
              {dictionary.footer.datenschutz}
            </Link>
            <span>
              © {new Date().getFullYear()} {dictionary.nav.brand}. {dictionary.footer.rights}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

function PortfolioCard({
  item,
  className = "",
  imageClassName,
  imageSizes,
  bodyClassName = "p-5",
  titleClassName = "text-2xl"
}: {
  item: Dictionary["portfolio"]["items"][number];
  className?: string;
  imageClassName: string;
  imageSizes: string;
  bodyClassName?: string;
  titleClassName?: string;
}) {
  return (
    <article className={`group overflow-hidden rounded-lg border border-champagne/45 bg-ivory ${className}`}>
      <div className={`relative overflow-hidden ${imageClassName}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={imageSizes}
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <div className={bodyClassName}>
        <h3 className={`font-display text-charcoal ${titleClassName}`}>{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-charcoal-soft/76">{item.caption}</p>
      </div>
    </article>
  );
}

function SelectedWeddingCard({
  item,
  labels
}: {
  item: Dictionary["selectedWeddings"]["items"][number];
  labels: Dictionary["selectedWeddings"]["labels"];
}) {
  return (
    <article className="group overflow-hidden rounded-lg border border-champagne/45 bg-ivory">
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-soft-gold">{item.location}</p>
        <h3 className="mt-3 font-display text-3xl leading-tight text-charcoal">{item.title}</h3>
        <dl className="mt-6 grid gap-4 text-sm leading-6 text-charcoal-soft/78">
          <div>
            <dt className="font-medium text-charcoal">{labels.guests}</dt>
            <dd>{item.guests}</dd>
          </div>
          <div>
            <dt className="font-medium text-charcoal">{labels.service}</dt>
            <dd>{item.service}</dd>
          </div>
          <div>
            <dt className="font-medium text-charcoal">{labels.type}</dt>
            <dd>{item.type}</dd>
          </div>
          <div>
            <dt className="font-medium text-charcoal">{labels.highlight}</dt>
            <dd>{item.highlight}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  title,
  align = "center",
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs uppercase tracking-[0.28em] ${
          tone === "dark" ? "text-champagne" : "text-soft-gold"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance font-display text-4xl leading-tight sm:text-5xl ${
          tone === "dark" ? "text-warm-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
