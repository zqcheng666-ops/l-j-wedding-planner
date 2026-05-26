import { notFound, redirect } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type PageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export default function Page({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  if (params.locale === defaultLocale) {
    redirect("/");
  }

  const dictionary = getDictionary(params.locale);

  return <LandingPage dictionary={dictionary} locale={params.locale} />;
}
