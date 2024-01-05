import "@/assets/styles/index.scss";
import { BecomePartnerModal, TheFooter, TheHeader, Loader } from "@/components";
import api from "@/services";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { NextIntlClientProvider, useMessages } from "next-intl";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata = {
  msapplicationTileColor: "#da532c",
  themeColor: "#ffffff",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        rel: "apple-touch-icon",
      },
    ],
    other: [
      {
        url: "/favicon/site.webmanifest",
        rel: "manifest",
      },
      {
        url: "/favicon/safari-pinned-tab.svg",
        rel: "mask-icon",
        color: "#5bbad5",
      },
    ],
    // shortcut: '/favicon/favicon-16x16.png',
    // apple: '/favicon/apple-touch-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/favicon/apple-touch-icon-precomposed.png',
    // },
  },
};

export const getMenuMethod = async () => {
  try {
    const { data } = await api().menu.getMenu();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getVariables = async () => {
  try {
    const { data } = await api().variables.getVariables();
    return data.common;
  } catch (e) {
    console.log(e);
  }
};
export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  if (!locales.includes(locale)) notFound();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <TheHeader />
          <main className="main container_vertical">{children}</main>
          <TheFooter />
          <BecomePartnerModal />
          <Loader />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
