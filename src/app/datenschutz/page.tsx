import { LegalPage } from "@/components/LegalPage";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Page() {
  const dictionary = getDictionary(defaultLocale);

  return <LegalPage dictionary={dictionary} locale={defaultLocale} page="datenschutz" />;
}
