import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./styles/home.scss";

function Projects() {
  return (
    <section
      id="projects"
      className="flex-col items-center justify-start h-full my-7"
    >
      <p className="text-2xl py-5">Here are some of my projects</p>
      <Swiper
        spaceBetween={200}
        slidesPerView={2}
        grabCursor={true}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full px-5"
      >
        <SwiperSlide>
          <img src="https://placehold.co/100X100" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/100X100" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/100X100" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/100X100" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/100X100" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/100X100" className="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="">
      <div>
        <p>You can find me through here</p>
      </div>
      <div>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/FettahAud">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/fettah-aud/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/fettahaud">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/fettahaud/">
              Instagram
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/Fettah_Aud">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div id="app">
      <section id="main" className="w-full">
        <div className="title">
          <h1 className="">
            My name is <b>Fettah</b>
          </h1>
          <h2 className="">A Frontend/Creative Developer</h2>
        </div>
      </section>
      <section id="about" className="gap-5 flex-col md:flex-row mx-5 h-full">
        <div className="text-cont">
          <p className="text-2xl">
            Hello, how are you, today we are going to learn about AbdelFattah
            (me).
          </p>
          <br />
          <p>
            I'm a person from Levant, lives and study Web Development in Türkiye
            Istanbul.
            <br /> Also I'm in my twenties (flower of my youth)
            <br /> See me right there =={">"}
          </p>
        </div>
        <div>
          <img src="https://placehold.co/400X500" className="w-100" />
        </div>
      </section>
      <Projects />
      <Contact />
    </div>
  );
}
