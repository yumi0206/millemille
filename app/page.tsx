// "use client";
import ItemList from "./_components/ItemList";
import LatestNews from "./_components/LatestNews";
import SwiperComponent from "./_components/SwiperComponent";
import Wrapper from "./_components/Wrapper";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const animationRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const componentAnimation =
  //     animationRef.current?.querySelectorAll(".component-items");
  //   componentAnimation?.forEach((ref: any, index: any) => {
  //     gsap.fromTo(
  //       ref,
  //       {
  //         opacity: 0,
  //         y: 10,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,

  //         scrollTrigger: {
  //           trigger: ref,
  //           start: "top 80%",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <main className="bg-cocoa-10 max-w-[100vw]">
      <SwiperComponent />

      <div>
        {/* <div className="component-items ref={animationRef}"> */}
        <LatestNews />
        <Wrapper
          title="About"
          subtitle="私たちについて"
          wrapperImg="/images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg"
          link="/About"
          bgColor="bg-white"
        />
        <Wrapper
          title="Product"
          subtitle="商品紹介"
          wrapperImg="/images/aliona-gumeniuk-YJ7dFJTHEjI-unsplash.jpg"
          link="/Product"
          description={`華やかな香りと上品な味わいが口いっぱいに広がる、当店自慢のフルーツタルト。
          じっくりと焼き上げた酵母生地となめらかなクリームの絶妙な調和をお楽しみください。
          一口ごとに広がる幸せな味わいは、特別な日のデザートにぴったりです。`}
          bgColor="bg-cocoa-10"
        />
        <Wrapper
          title="Access"
          subtitle="アクセス"
          wrapperImg="/images/olena-bohovyk-dmGOOXS6Rbs-unsplash.jpg"
          link="/Access"
          bgColor="bg-white"
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <ItemList />
      </div>
    </main>
  );
}
