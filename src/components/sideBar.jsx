import React from "react";

export default function SideBar() {
  return (
    <aside className="h-full bg-[#16161C] p-10 flex flex-col justify-center text-white flex-grow relative">
      <h3 className="font-bold text-[32px] mb-16">
        Truecolo
        <span className="text-[#fe3939]">r</span>
      </h3>

      <nav className="space-y-4">
        <button className="p-3 flex items-center justify-between font-bold text-[#f4f4f4] border border-[#696969] rounded w-full relative">
          <span>Set up a call</span>
          <span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1L8.5 8L1.5 15"
                stroke="#F4F4F4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a href="/" className="absolute opacity-0 inset-0">
            .
          </a>
        </button>

        <button className="p-3 flex items-center justify-between font-bold text-[#f4f4f4] border border-[#696969] rounded w-full relative">
          <span>Email</span>
          <span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1L8.5 8L1.5 15"
                stroke="#F4F4F4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a href="/" className="absolute opacity-0 inset-0">
            .
          </a>
        </button>

        <button className="p-3 flex items-center justify-between font-bold text-[#f4f4f4] border border-[#696969] rounded w-full relative">
          <span>What is Truecolor?</span>
          <span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1L8.5 8L1.5 15"
                stroke="#F4F4F4"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a href="/" className="absolute opacity-0 inset-0">
            .
          </a>
        </button>
        <button className="p-3 font-bold text-[#f4f4f4] border border-[#696969] rounded w-full relative text-left">
          <span>What is Truecolor?</span>
          <a href="/" className="absolute opacity-0 inset-0">
            .
          </a>
        </button>
      </nav>

      <button className="absolute bottom-8 left-8">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_28_29)">
            <rect
              x="6"
              y="6"
              width="32"
              height="32"
              rx="5.55556"
              fill="#007AB9"
            />
            <path
              d="M29.5477 23.6799V29.4289H26.2146V24.0652C26.2146 22.7185 25.7333 21.7988 24.5265 21.7988C23.6056 21.7988 23.0585 22.4179 22.8168 23.0175C22.7291 23.2318 22.7065 23.5293 22.7065 23.8298V29.4287H19.3731C19.3731 29.4287 19.4179 20.3444 19.3731 19.404H22.7067V20.8246C22.7 20.8358 22.6906 20.8467 22.6846 20.8574H22.7067V20.8246C23.1497 20.143 23.9396 19.1686 25.7107 19.1686C27.9036 19.1686 29.5477 20.6014 29.5477 23.6799ZM15.8862 14.5718C14.746 14.5718 14 15.3202 14 16.3036C14 17.266 14.7243 18.0361 15.8424 18.0361H15.864C17.0266 18.0361 17.7495 17.266 17.7495 16.3036C17.7273 15.3202 17.0266 14.5718 15.8862 14.5718ZM14.1981 29.4289H17.5302V19.404H14.1981V29.4289Z"
              fill="#FCFCFC"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_28_29"
              x="0.444444"
              y="0.444444"
              width="47.5556"
              height="47.5556"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2.22222" dy="2.22222" />
              <feGaussianBlur stdDeviation="3.88889" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.109375 0 0 0 0 0.20191 0 0 0 0 0.3125 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_28_29"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_28_29"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </aside>
  );
}
