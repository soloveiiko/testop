"use client";
import Link from "next/link";
import IconSvg from "./iconSvg";
import { Navigation } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PropType from "prop-types";
import { getMenuMethod, getVariables } from "@/layouts/default";

// TheFooter.propTypes = {
//   menu: PropType.array,
//   socials: PropType.array,
//   common: PropType.object,
// };
export default function TheFooter(
  {
    // menu = [],
    // socials = [],
    // common = {},
  },
) {
  const [whiteFooter, setWhiteFooter] = useState(false);
  const [menu, setMenu] = useState([]);
  const [variables, setVariables] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    async function fetchData() {
      try {
        const menuData = await getMenuMethod();
        const variablesData = await getVariables();

        setMenu(menuData);
        setVariables(variablesData);
      } catch (e) {
        console.error("Помилка отримання даних:", e);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setWhiteFooter(pathname === "/about");
  }, [pathname]);

  return (
    <footer
      className={
        "container_horizontal container_outer footer" +
        (whiteFooter ? " footer_white" : "")
      }
    >
      <div className="container footer__container">
        <div className="footer__top">
          <div className="container_horizontal footer__logo">
            <Link href="/" passHref>
              <IconSvg
                name="logo"
                className="logo__icon"
                alt="logo"
                width="78"
                height="60"
              />
            </Link>
          </div>
          {/*<div className="footer__contacts footer__email">*/}
          {/*  <Link href={`mailto:${common.email}`} passHref className="title">*/}
          {/*    {common.email}*/}
          {/*  </Link>*/}
          {/*</div>*/}
          {/*<div className="footer__contacts footer__phone">*/}
          {/*  <Link href={`tel:${common.phone}`} passHref className="text_large">*/}
          {/*    {common.phone}*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
        <div className="container_horizontal footer__socials">
          {/*{menu?.social.map((social, index) => (*/}
          {/*  <Link key={index} href={social?.path || ""} passHref>*/}
          {/*    <IconSvg*/}
          {/*      name={social?.name}*/}
          {/*      className="socials__icon"*/}
          {/*      alt={social?.name}*/}
          {/*      width="16"*/}
          {/*      height="16"*/}
          {/*    />*/}
          {/*  </Link>*/}
          {/*))}*/}
        </div>
        <Navigation menuList={menu?.footer} />
        {/*<ul className="container_horizontal footer__copyright">*/}
        {/*  <li className="container_vertical">*/}
        {/*    <Link href="/" className="text">*/}
        {/*      Політика конфіденційності*/}
        {/*    </Link>*/}
        {/*    <Link href="/" className="text">*/}
        {/*      Публічна оферта*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li className="container_vertical">*/}
        {/*    <span className="text">{common.copyright}</span>*/}
        {/*    <span className="text">{common.copyright_info}</span>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </footer>
  );
}
