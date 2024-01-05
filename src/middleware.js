import createMiddleware from "next-intl/middleware";
import { locales } from "@/i18n";

export default createMiddleware({
  locales,
  defaultLocale: "uk",
  localeDetection: true,
  localePrefix: "as-needed",
});

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|images/|fonts/|favicon/|favicon.ico).*)",
};
