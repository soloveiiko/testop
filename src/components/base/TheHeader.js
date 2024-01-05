"use client";
import Link from "next/link";
import IconSvg from "./iconSvg";
import { Button, Navigation } from "@/components";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useBecamePartnerModals } from "@/store/modals";
import PropType from "prop-types";
import LanguageSwitcher from "@components/base/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "@/i18n";
import { getMenuMethod, getVariables } from "@/layouts/default";
export default function TheHeader({ locale }) {
  const [menu, setMenu] = useState([]);
  const { usePathname } = createSharedPathnamesNavigation({
    locales,
  });
  const t = useTranslations("Buttons");

  const [fixHeader, setfixHeader] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const toggleBecomePartner = useBecamePartnerModals((state) => state.toggle);
  const isBecomePartnerVisible = useBecamePartnerModals(
    (state) => state.isVisible,
  );

  const onScrollBody = useCallback(
    (e) => {
      if (scrollY > window.scrollY) {
        statusHeaderChange();
      } else if (scrollY < window.scrollY && window.scrollY >= 100) {
        setHideHeader(true);
        setfixHeader(false);
      }
      setScrollY(window.scrollY);
    },
    [scrollY],
  );

  function statusHeaderChange() {
    const scrollValue = window.scrollY;
    const indexPage =
      pathname === "/" || pathname === "/en" || pathname === "/uk";
    indexPage && scrollValue <= 100
      ? (setfixHeader(false), setHideHeader(false))
      : (setfixHeader(true), setHideHeader(true));
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollBody);

    return () => {
      window.addEventListener("scroll", onScrollBody);
    };
  }, [onScrollBody]);

  useEffect(() => {
    async function fetchData() {
      try {
        const menuData = await getMenuMethod();

        setMenu(menuData);
      } catch (e) {
        console.error("Помилка отримання даних:", e);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      statusHeaderChange();
    }, 0);
  }, [pathname]);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [showMobileMenu, isBecomePartnerVisible]);

  return (
    <header
      className={
        "container_horizontal container_outer header" +
        (fixHeader ? " header_fixed" : "") +
        (hideHeader && !fixHeader ? " header_hide" : "") +
        (showMobileMenu ? " mobile-menu" : "")
      }
    >
      <div className="container container_horizontal header__container">
        <Link href="/" passHref onClick={() => setShowMobileMenu(false)}>
          <IconSvg
            name="logo"
            className={`header__logo ${showMobileMenu ? "white-logo" : ""}`}
            alt="logo"
            width="78"
            height="60"
          />
        </Link>
        <div
          className={`container_horizontal header__menu ${
            showMobileMenu ? "open" : ""
          }`}
        >
          <Navigation
            menuList={menu?.header}
            pathname={pathname}
            closeMenu={() => setShowMobileMenu(false)}
          />
          <div className="container_horizontal menu__buttons">
            <Button
              btnProps={{ className: "button_white" }}
              textProps={{ value: t("become_partner") }}
              onClick={() => {
                toggleBecomePartner(t("become_partner"));
              }}
            />
            <LanguageSwitcher pathname={pathname} currentLocale={locale} />
          </div>
        </div>

        <div
          className={`header__burger ${showMobileMenu ? "open" : ""}`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
