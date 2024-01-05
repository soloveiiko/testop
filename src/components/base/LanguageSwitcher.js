"use client";
import { useTransition } from "react";
import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "@/i18n";

export default function LanguageSwitcher() {
  const { useRouter, usePathname } = createSharedPathnamesNavigation({
    locales,
  });
  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const [, startTransition] = useTransition();

  const onLangChange = (selectedLocale) => {
    startTransition(() => {
      router.push(pathname, { locale: selectedLocale });
    });
  };

  return (
    <div className="language-switcher">
      {locales.map(
        (loc, index) =>
          loc !== locale && (
            <button
              key={index}
              className="button_white button_circle-small text"
              onClick={() => onLangChange(loc)}
            >
              {loc.toUpperCase()}
            </button>
          ),
      )}
    </div>
  );
}
