import RootLayout, { metadata } from "@/layouts/default";

export { metadata };
export default function Layout({ children, params }) {
  return <RootLayout params={params}>{children}</RootLayout>;
}
