import { SVGProps } from "react";

interface SvgProp extends SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const SvgUser = (props: SvgProp) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.949 14.54c-3.45 0-6.36.564-6.36 2.74S8.517 20 11.948 20c3.45 0 6.361-.564 6.361-2.74s-2.93-2.72-6.361-2.72"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
    <path
      opacity={0.4}
      d="M11.949 12.467a4.207 4.207 0 0 0 4.21-4.233A4.206 4.206 0 0 0 11.948 4a4.206 4.206 0 0 0-4.21 4.234 4.207 4.207 0 0 0 4.21 4.233M21.088 9.22c.604-2.378-1.168-4.513-3.424-4.513-.245 0-.48.027-.71.073-.03.007-.064.022-.082.049-.02.034-.005.08.017.11a5.807 5.807 0 0 1 1.068 3.37 5.762 5.762 0 0 1-.984 3.242.158.158 0 0 0 .106.244c.158.028.319.042.484.047 1.643.043 3.117-1.02 3.525-2.623"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
    <path
      d="M22.81 14.817c-.302-.645-1.028-1.087-2.132-1.304-.52-.128-1.931-.308-3.243-.284-.02.003-.03.017-.032.026-.003.012.003.034.029.047.606.302 2.949 1.614 2.654 4.381-.012.12.084.224.203.206.576-.083 2.06-.404 2.52-1.402a1.923 1.923 0 0 0 0-1.67"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
    <path
      opacity={0.4}
      d="M7.045 4.78a3.514 3.514 0 0 0-.71-.073c-2.256 0-4.028 2.135-3.422 4.513.406 1.602 1.88 2.665 3.524 2.622.165-.005.327-.02.483-.047a.158.158 0 0 0 .107-.244 5.764 5.764 0 0 1-.984-3.241c0-1.25.39-2.415 1.068-3.37.022-.03.038-.076.016-.11-.018-.029-.05-.043-.082-.05"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
    <path
      d="M3.322 13.513c-1.104.217-1.83.659-2.13 1.304a1.918 1.918 0 0 0 0 1.67c.46.998 1.943 1.32 2.52 1.402.119.018.214-.085.201-.206-.294-2.766 2.05-4.079 2.656-4.38.025-.015.03-.035.028-.049-.002-.009-.012-.022-.031-.024-1.313-.025-2.722.155-3.244.283"
      fill="#fff"
      fillOpacity={!props.isActive ? 0.7 : 1}
    />
  </svg>
);
export default SvgUser;