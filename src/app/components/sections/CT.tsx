"use client";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Stars from "../ui/Stars";
import feedback from "@/app/utils/feedback";
import UpworkLogo from "../ui/UpworkLogo";

export default function CT() {
  return (
    <div className="ct">
      <header>
        <h1>Customer Testimonials</h1>
        <p>Hear our what clients have to say about our work</p>
      </header>
      <div className="testimonials">
        <Splide
          hasTrack={false}
          options={{
            perPage: 2,
            gap: "20px",
            perMove: 1,
          }}
        >
          <SplideTrack>
            {feedback.map((f, i) => (
              <SplideSlide key={i}>
                <div className="testi-card">
                  <Stars count={f.starCount} />
                  <div className="feedback-wrapper">
                    <span className="feedback">
                      <span id={f.id}>{f.text}</span>
                    </span>
                    {/* <button
                      aria-expanded="false"
                      aria-controls={f.id}
                      type="button"
                      data-ev-label="truncation_toggle"
                      className="truncation-btn"
                    >
                      <span>See more</span>
                    </button> */}
                  </div>
                  <div className="details">
                    <div className="user-wrapper">
                      <figure className="pp">
                        {f.userPhoto && (
                          <Image
                            src={f.userPhoto}
                            width={50}
                            height={50}
                            alt="User Photo"
                          />
                        )}
                      </figure>
                      <div className="user">
                        <h4>{f.userName}</h4>
                        <p>{f.userTitle}</p>
                      </div>
                    </div>
                    <div className="company">
                      {f.jobSrc === "Upwork" ? <UpworkLogo /> : f.jobSrc}
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__arrows">
            <button
              className="arr-but splide__arrow--prev"
              type="button"
              aria-label="Previous slide"
              aria-controls="splide01-track"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25.0002"
                  r="24.5"
                  transform="rotate(-180 25 25.0002)"
                  fill="white"
                  stroke="black"
                />
                <path
                  d="M15.6335 25.0003L34.3662 25.0003M34.3662 25.0003L27.2478 32.1188M34.3662 25.0003L27.2478 17.8819"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
            </button>
            <button
              className="arr-but splide__arrow--next"
              type="button"
              aria-label="Next slide"
              aria-controls="splide01-track"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25.0002"
                  r="24.5"
                  transform="rotate(-180 25 25.0002)"
                  fill="white"
                  stroke="black"
                />
                <path
                  d="M15.6335 25.0003L34.3662 25.0003M34.3662 25.0003L27.2478 32.1188M34.3662 25.0003L27.2478 17.8819"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
}

{
  /* <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25.0002" r="24.5" transform="rotate(-180 25 25.0002)" fill="white" stroke="black"/>
<path d="M15.6335 25.0003L34.3662 25.0003M34.3662 25.0003L27.2478 32.1188M34.3662 25.0003L27.2478 17.8819" stroke="black" stroke-width="1.5"/>
</svg> */
}
