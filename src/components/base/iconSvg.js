import SVG from "@public/images/icons";
export default function IconSvg({ name, ...IconSvgProps }) {
  return (
    <svg {...IconSvgProps}>
      <use href={`${SVG[name]}#root`} />
    </svg>
  );
}
