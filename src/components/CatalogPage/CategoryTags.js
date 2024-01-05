import all from "@public/images/catalogPage/category/all.webp";
import forProduction from "@public/images/catalogPage/category/forProduction.webp";
import retail from "@public/images/catalogPage/category/retail.webp";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const categoryList = [
  { id: 1, title: "Всі", image: all, link: "#", active: true },
  { id: 2, title: "Для виробництва", image: forProduction, link: "#" },
  { id: 3, title: "HoReCa та Retail", image: retail, link: "#" },
];
export default function CategoryTags() {
  const t = useTranslations("CatalogPage");

  // todo add class for selected tab
  return (
    <section className="container_horizontal category">
      <div className="container_horizontal category__tags category-tabs">
        {categoryList.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`button_white button_icon-left category-tabs__item ${item?.active && "active"}`}
          >
            <span className="text button__text">{item.title}</span>
            <Image
              className="button__image"
              src={item.image}
              alt={item.title}
              height="38"
              width="38"
            />
          </Link>
        ))}
      </div>
      <div className="category__counter goods-counter">
        <span className="text goods-counter__quantity">80</span>
        <span className="text goods-counter__title">{t("products")}</span>
      </div>
    </section>
  );
}
