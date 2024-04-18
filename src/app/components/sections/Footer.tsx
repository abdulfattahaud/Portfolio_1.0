import * as React from "react";
import Magnetic from "../Magnetic";

export default function Footer() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getUTCMinutes();

  const offset = -date.getTimezoneOffset() / 60;
  const formattedOffset = offset >= 0 ? `GMT+${offset}` : `GMT${offset}`;

  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${
    hours > 12 ? "PM" : "AM"
  } ${formattedOffset}`;
  return (
    <div id="footer">
      <main className=" flex flex-col">
        <section className="container mx-auto flex flex-col">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                <h1 className="text-white text-5xl max-w-[290px] self-start">
                  Let’s work together
                </h1>
                <div className="flex max-w-full items-start justify-between gap-5 mt-28 self-start max-md:flex-wrap max-md:mt-10">
                  <a
                    href="mailto:fettahaud@gmail.com"
                    className="text-white text-base text-[20px] content-center items-center border self-stretch max-w-full grow basis-auto px-[40px] py-[25px] rounded-[3.0625rem] border-solid border-white"
                  >
                    fettahaud@gmail.com
                  </a>
                  <a
                    href="tel:+905541728733"
                    className="text-white text-base text-[20px] justify-center items-center border self-stretch max-w-full grow basis-auto px-[40px] py-[25px] rounded-[3.0625rem] border-solid border-white"
                  >
                    +90 554 172 87 33
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-[21%] items-center content-center max-md:w-full">
              <Magnetic>
                <div className="bg-[#CC3737] items-center justify-center flex h-[150px] w-[150px] max-w-full flex-col m-auto rounded-[50%] max-md:mt-10">
                  <div className="text-white text-2xl font-medium self-center">
                    Say Hi
                  </div>
                </div>
              </Magnetic>
            </div>
          </div>
        </section>
        <section className="self-center flex w-full max-w-[1218px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center footer">
          <div className="flex flex-row gap-[45px] self-start">
            <div className="flex-col">
              <div className="text-neutral-300 text-opacity-70 text-base font-medium uppercase self-start">
                Version
              </div>
              <div className="text-zinc-100 text-base font-medium uppercase mt-3">
                2023 © Edition
              </div>
            </div>
            <div className="flex-col">
              <div className="flex flex-col">
                <div className="text-neutral-300 text-opacity-70 text-base font-medium uppercase self-start">
                  Locale time
                </div>
                <div className="text-zinc-100 text-base font-medium uppercase mt-3">
                  {formattedTime}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-neutral-300 text-opacity-70 text-base font-medium uppercase self-start">
              Socials
            </div>
            <div className="flex max-w-full items-start gap-4 mt-3 self-start max-md:justify-center">
              <Magnetic>
                <a
                  target="_blank"
                  href="https://twitter.com"
                  className="text-zinc-100 text-base font-medium self-start"
                >
                  Twitter
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  target="_blank"
                  href="https://instagram.com"
                  className="text-zinc-100 text-base font-medium self-start"
                >
                  Instagram
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  target="_blank"
                  href="https://linkedin.com"
                  className="text-zinc-100 text-base font-medium self-start"
                >
                  LinkedIn
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
