import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgLogoWhite = (props: SvgProp) => (
  <svg
    width={139}
    height={86}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#LogoWhite_svg__a)">
      <path
        d="M6.607 47.953h-4.79V85.15h4.79V47.953ZM75.066 51.18c-3.555-3.381-6.954-5.072-10.354-5.072-2.937 0-5.409.922-7.263 2.767-2.01 1.844-2.937 4.304-2.937 7.07 0 2.152.618 4.15 1.855 5.841 1.236 1.691 3.554 3.382 6.8 5.226 3.09 1.691 5.099 2.92 6.026 3.997.927 1.076 1.391 2.305 1.391 3.689 0 1.69-.618 3.074-2.009 4.303-1.39 1.23-2.936 1.845-4.945 1.845-2.782 0-5.409-1.383-7.727-4.15l-3.09 3.381c1.236 1.691 2.936 2.92 4.79 3.843 2.01.922 4.018 1.383 6.181 1.383 3.246 0 5.873-1.075 8.036-3.227 2.164-2.152 3.246-4.765 3.246-7.84 0-2.151-.619-4.15-1.855-5.84-1.236-1.691-3.709-3.536-7.263-5.38-2.936-1.537-4.79-2.767-5.718-3.996-.927-1.076-1.39-2.306-1.39-3.382 0-1.383.617-2.613 1.7-3.689 1.081-1.076 2.472-1.537 4.017-1.537 2.627 0 4.945 1.383 7.572 3.689l2.937-2.92ZM110.3 47.953h-4.79V85.15h4.79V47.953ZM124.209 33.658h-4.791V85.15h4.791V33.658ZM138.271 33.658h-4.791V85.15h4.791V33.658ZM31.333 46.108c-8.808 0-15.917 7.07-15.917 15.832v23.056h4.945V61.94c0-5.995 4.945-10.913 10.972-10.913 6.027 0 10.972 4.918 10.972 10.913v23.056h4.945V61.94c0-8.608-7.108-15.832-15.917-15.832ZM86.656 55.484h8.808v-4.15h-8.808v-17.83h-4.79v39.503c0 6.917 5.563 12.45 12.517 12.45 1.7 0 3.4-.307 4.945-1.076l-1.7-4.457c-.927.46-2.164.768-3.245.768-4.173 0-7.727-3.381-7.727-7.685V55.484ZM111.513 38.207a3.99 3.99 0 0 0-2.175-5.222 4.026 4.026 0 0 0-5.25 2.163 3.99 3.99 0 0 0 2.175 5.221c2.05.845 4.401-.123 5.25-2.162ZM7.901 38.104a3.989 3.989 0 0 0-2.174-5.222c-2.05-.845-4.4.124-5.25 2.163a3.989 3.989 0 0 0 2.175 5.221c2.05.845 4.4-.123 5.25-2.162Z"
        fill="#fff"
      />
      <path
        d="M101.921 8.655c-.515-.512-1.03-1.196-1.545-1.708L98.83 5.41c-.515-.512-1.03-.854-1.545-1.366-.515-.342-1.03-.683-1.545-1.196-.515-.341-1.202-.683-1.889-1.025-.687-.341-1.202-.512-1.889-.853l-2.06-.513c-.687-.17-1.374-.17-2.06-.17h-1.89c-.686 0-1.373.17-1.888.341-.687.17-1.202.17-1.889.512l-2.06.513c-.687.17-1.203.512-1.89.683-.686.341-1.373.512-2.06.854-.515.17-1.202.512-1.717.683-.687.341-1.202.512-1.889.854-.515.17-1.03.512-1.545.854-.515.341-1.03.512-1.545.854-.515.341-1.202.512-1.717.854-.515.341-1.03.512-1.546.854-.515.341-.858.512-1.373.853-.516.342-.859.513-1.374.854-.515.342-.859.513-1.374.684-.515.17-.858.512-1.373.683-.515.17-.859.512-1.374.683-.515.17-.858.341-1.374.683-.515.17-.858.341-1.373.683-.515.17-1.03.342-1.374.683-.687.342-1.373.513-1.889.854-.687.17-1.202.512-1.888.683L49.894 16c-.687.17-1.373.341-2.232.512-.687.17-1.374.17-2.232.342-.687 0-1.374.17-2.06.17h-2.061c-.515 0-1.03 0-1.717-.17-.687-.171-1.202-.171-1.889-.342-.687-.17-1.545-.342-2.232-.683-.515-.17-1.202-.512-1.717-.683.172 0 .172.17.343.341.515.513 1.202.854 1.89 1.367.686.341 1.373.683 2.231 1.024.859.342 1.717.513 2.404.854.687.171 1.545.342 2.232.513.859.17 1.546.17 2.404.17h2.404c.859 0 1.717-.17 2.576-.17.515 0 1.202-.171 1.717-.171.687-.171 1.202-.171 1.889-.342 1.03-.17 2.06-.341 3.09-.683l2.06-.512c.516-.171 1.203-.342 1.718-.342.515-.17 1.202-.341 1.717-.512.858-.342 1.888-.513 2.747-.854.859-.342 1.717-.512 2.576-.683.858-.171 1.717-.513 2.575-.683.515-.171 1.03-.342 1.717-.513l1.546-.512c.515-.17 1.03-.342 1.545-.342.515-.17 1.03-.17 1.545-.341.344-.342.859-.513 1.202-.513.515-.17.859-.17 1.374-.341.515-.171.859-.171 1.374-.342.515 0 .858-.17 1.373-.341.687-.171 1.202-.171 1.889-.342.687-.17 1.202-.17 1.889-.341.343 0 .858-.171 1.202-.171.686-.171 1.545-.171 2.232-.171.515 0 1.202-.17 1.717-.17H94.88c.687 0 1.546.17 2.232.17.687.17 1.546.17 2.233.341.686.171 1.373.171 2.06.513.859.17 1.717.512 2.576.683-.344-.512-.687-1.195-1.202-1.708-.172-.341-.515-.854-.859-1.366Z"
        fill="url(#LogoWhite_svg__b)"
      />
    </g>
    <defs>
      <linearGradient
        id="LogoWhite_svg__b"
        x1={33.836}
        y1={9.75}
        x2={112.133}
        y2={9.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#08A6F7" />
        <stop offset={1} stopColor="#63F4F9" />
      </linearGradient>
      <clipPath id="LogoWhite_svg__a">
        <path fill="#fff" transform="translate(.271 .457)" d="M0 0h138v85H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoWhite;
