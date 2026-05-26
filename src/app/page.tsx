import { LandingPage } from "@/components/LandingPage";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Page() {
  const dictionary = getDictionary(defaultLocale);

  return <LandingPage dictionary={dictionary} locale={defaultLocale} />;
}
