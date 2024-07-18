import React, { useEffect } from "react";
import "./about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleBackground from "../../components/ParticleBackground";

gsap.registerPlugin(ScrollTrigger);

const AboutUs3 = () => {
  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      gsap.fromTo(
        ".hero-section",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "center",
            end: "720",
            scrub: true,
          },
        }
      );

      let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");
      itemsL.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -200 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              scrub: true,
            },
          }
        );
      });

      let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

      itemsR.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 200 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              end: "top",
              scrub: true,
            },
          }
        );
      });
    }
  }, []);

  return (
    <div>
      <div className="wrapper">
        <ParticleBackground />

        <div className="content">
          <header className="hero-section">
            <img
              data-speed=".6"
              className="hero"
              src="/about/hero.png"
              alt="Alt"
            />
            <div className="container">
              <div data-speed=".75" className="main-header">
                <h1 className="main-title">who we are?</h1>
              </div>
            </div>
          </header>

          <div className="portfolio">
            <div className="container">
              <div className="gallery">
                <div data-speed=".9" className="gallery__left">
                  <img className="gallery__item" src="/about/1.jpg" alt="Alt" />
                  <img className="gallery__item" src="/about/2.jpg" alt="Alt" />

                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">
                      Creative floating scroll with amazing parallax effect
                    </h2>
                    <p className="text-block__p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor amount scrolling.
                    </p>
                  </div>

                  <img className="gallery__item" src="/about/6.jpg" alt="Alt" />
                </div>

                <div data-speed="1.1" className="gallery__right">
                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">
                      Creative floating scroll with amazing parallax effect
                    </h2>
                    <p className="text-block__p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor amount scrolling.
                    </p>
                  </div>

                  <img className="gallery__item" src="/about/4.jpg" alt="Alt" />
                  <img className="gallery__item" src="/about/5.jpg" alt="Alt" />
                  <img className="gallery__item" src="/about/3.jpg" alt="Alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs3;
