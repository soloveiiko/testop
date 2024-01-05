import { getRequestConfig } from "next-intl/server";
export const locales = ["uk", "en"];
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}));
