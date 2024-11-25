import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="1000" height="1000" rx="500" fill="#181817" />
            <rect
                width="1000"
                height="1000"
                rx="500"
                fill="black"
                fill-opacity="0.2"
            />
            <rect
                width="1000"
                height="1000"
                rx="500"
                fill="black"
                fill-opacity="0.2"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M285 240V759.712H455.214C509.162 759.712 555.901 748.783 595.432 726.925C635.428 705.067 666.355 674.605 688.213 635.539C710.071 596.009 721 550.665 721 499.507C721 447.885 710.071 402.541 688.213 363.475C666.355 324.41 635.428 294.18 595.432 272.787C555.901 250.929 509.162 240 455.214 240H285ZM456.61 686.464H367.317V395.566H285.057V313.234H367.388V313.248H456.61C493.35 313.248 525.207 320.922 552.181 336.269C579.155 351.616 600.083 373.242 614.965 401.146C630.312 428.585 637.986 461.372 637.986 499.507C637.986 537.643 630.545 570.662 615.662 598.566C600.78 626.47 579.62 648.096 552.181 663.443C525.207 678.79 493.35 686.464 456.61 686.464Z"
                fill="#FFBD00"
            />
        </svg>
    );
}
