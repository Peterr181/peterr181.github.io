import React from "react";
import "../../app/globals.css";

const Page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-9 text-white">
      <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
        <h2 className="lg:text-4xl md:text-2xl sm:text-xl text-xl mt-16 fade-in-text">
          Choose <span className="text-[#1d4ed8]">your</span> way to{" "}
          <span className="text-[#1d4ed8]">contact me</span>
        </h2>
        <div className="mt-10">
          <div className="lg:flex grid lg:gap-6 gap-6  mt-3 items-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/peter-%C5%BCerdzi%C5%84ski/"
              className="text-center border border-[#1d4ed8] text-lg font-bold no-underline flex justify-center gap-4 items-center  text-font-primary w-full h-full transition-transform duration-100 ease-in-out rounded-full px-8 py-4 spinning-animation fade-in-link linkedin-link"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className=" text-4xl"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
              Linkedin
            </a>
            <a
              href="mailto:hustlax181@gmail.com"
              className="text-center border border-[#1d4ed8] text-lg font-bold no-underline flex justify-center gap-4 items-center  text-font-primary w-full h-full transition-transform duration-100 ease-in-out rounded-full px-8 py-4 spinning-animation fade-in-link mail-link"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className=" text-4xl"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              E-mail
            </a>
            <a
              target="_blank"
              href="https://github.com/Peterr181"
              className="text-center border border-[#1d4ed8] text-lg font-bold no-underline flex justify-center gap-4 items-center  text-font-primary w-full h-full transition-transform duration-100 ease-in-out rounded-full px-8 py-4 spinning-animation fade-in-link github-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="2em"
                height="2em"
                viewBox="0 0 50 50"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
