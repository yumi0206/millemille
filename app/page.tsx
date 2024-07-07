"use client";
import { useRef } from "react";
import LatestNews from "./_components/LatestNews";
import SwiperComponent from "./_components/SwiperComponent";
import Wrapper from "./_components/Wrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { homeContents } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const wrapperRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(() => {
    wrapperRefs.current.forEach((wrapper, index) => {
      gsap.from(wrapper, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <main className="bg-cocoa-10 max-w-[100vw] flex flex-col">
      <SwiperComponent />
      <div className="justify-center items-center flex flex-col">
        <div className="md:w-[800px]">
          <LatestNews />
          {homeContents.map((content, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) wrapperRefs.current[index] = el;
              }}
            >
              <Wrapper
                title={content.title}
                subtitle={content.subtitle}
                wrapperImg={content.img}
                link={content.link}
                bgColor={content.bgColor}
                description={content.description}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
