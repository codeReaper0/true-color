import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/less/autoplay";

import {Autoplay, EffectFade} from "swiper";

export default function Main() {
  return (
    <main className="min-w-[320px] md:max-w-lg lg:max-w-3xl xl:max-w-[1050px] h-full 2xl:max-w-[2000px]">
      <Swiper
        spaceBetween={1}
        effect={"fade"}
        slidesPerView={1}
        autoplay={{delay: 5000, disableOnInteraction: true}}
        loop={true}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <div className="bg-[#B99EE4] md:w-full h-screen p-4 md:p-[50px] flex flex-col justify-center">
            <h1 className="font-extrabold text-[#16161c] text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase mb-3 xl:mb-6">
              Make a process that
            </h1>
            <h1 className="font-extrabold   text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase bg-[#16161c] text-white p-2 w-max">
              is data-driven
            </h1>

            <p className="text-[#16161c] font-semibold mt-6 text-sm lg:text-based">
              By basing decisions on evidence that has been independently
              verified by scientists, you can lessen unconscious bias in the
              hiring process. In order to discover top achievers, evaluate your
              prospects' behavioral tendencies, including cognitive aptitude,
              personality, and motivation.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#64D791] md:w-full h-screen p-4 md:p-[50px] flex flex-col justify-center">
            <h1 className="font-extrabold text-[#16161c] text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase mb-3 xl:mb-6">
              How much growth and
            </h1>
            <h1 className="font-extrabold   text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase leading-[40px] md:leading-[55px] lg:leading-[60px] xl:leading-[80px] text-[#16161c]">
              <span className="bg-[#16161c] text-white p-2 w-max">
                learning potential
              </span>
              <span>do your candidates have?</span>
            </h1>

            <p className="text-[#16161c] font-semibold text-sm lg:text-based">
              Find out how well your applicants can make decisions and solve
              problems. With the help of the Brain Cognitive Test, you can
              anticipate a candidate's capacity for learning and adaption by
              analysing their general intelligence factor, which is thought to
              be the best indicator of work performance.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#73D3E9] md:w-full h-screen p-4 md:p-[50px] flex flex-col justify-center">
            <h1 className="font-extrabold text-[#16161c]   text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase mb-3 xl:mb-6">
              HOW WILL YOUR
            </h1>
            <h1 className="font-extrabold   text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase text-[#16161c]">
              <span>CANDIDATES</span>
              <span className="bg-[#16161c] text-white p-2 w-max ml-3">
                CONDUCT
              </span>
            </h1>
            <h1 className="font-extrabold text-[#16161c]  text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase mb-3 xl:mb-6  leading-[40px] md:leading-[60px] lg:leading-[80px] xl:leading-[120px]">
              THEMSELVES AT WORK
            </h1>

            <p className="text-[#16161c] font-semibold">
              Recognize how candidates interact with others, how they frame and
              address issues, and how they control their emotions. The SHAPE
              personality test is based on the "Big Five" theoretical paradigm,
              which has been scientifically validated, and it offers valuable
              data about the candidates' personalities and how they will affect
              their behavior at work.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#E4BC96] md:w-full h-screen p-4 md:p-[50px] flex flex-col justify-center">
            <h1 className="font-extrabold text-[#16161c]   text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase mb-3 xl:mb-6">
              Examine the person
            </h1>
            <h1 className="font-extrabold   text-lg md:text-2xl lg:text-4xl xl:text-6xl font-lexend uppercase bg-[#16161c] text-white p-2 w-max">
              behind the resume.
            </h1>

            <p className="text-[#16161c] font-semibold mt-6 text-sm lg:text-based">
              One-way video interviews, which may be filmed wherever and
              whenever it suits them best, give candidates the chance to
              demonstrate their talents in a novel and interesting way. To make
              a better decision about who to work with moving forward, gather
              crucial qualitative data.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
