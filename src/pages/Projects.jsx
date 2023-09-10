import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex-col items-center justify-start h-full my-7"
    >
      <p className="text-2xl py-5">Here are some of my projects</p>
      <Swiper
        spaceBetween={200}
        breakpoints={{
          337: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
        }}
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
          <img src="../projects/01.jpg" className="" />
          <a href="https://sphere-curl.vercel.app/" target="_blank" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../projects/02.jpg" className="" />
          <a href="https://animating-triangles.vercel.app/" target="_blank" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../projects/03.jpg" className="" />
          <a href="https://moving-fox.vercel.app/" target="_blank" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../projects/05.jpg" className="" />
          <a href="https://travel-visualizer.vercel.app/" target="_blank" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
