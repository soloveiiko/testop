import Link from "next/link";
import React from "react";
import PropType from "prop-types";

const Navigation = ({ pathname, closeMenu, menuList = [] }) => {
  // const items = [
  //   {
  //     name: "Про нас",
  //     href: "/about",
  //   },
  //   {
  //     name: "Каталог",
  //     href: "/catalog",
  //   },
  //   {
  //     name: "Вакансії",
  //     href: "/vacancy",
  //   },
  //   {
  //     name: "Контакти",
  //     href: "/contact",
  //   },
  // ];

  return (
    <nav className="container_horizontal navigation">
      <ul className="container_horizontal navigation__list">
        {menuList.map((item, index) => (
          <li key={index}>
            <Link
              href={item?.path || ''}
              className={`text ${pathname === `/${item.path}` ? "active" : ""}`}
              passHref
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  pathname: PropType.string,
  closeMenu: PropType.func,
  menuList: PropType.array,
};

export default Navigation;
