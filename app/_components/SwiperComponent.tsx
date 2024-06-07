"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { images } from "@/lib/images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        mousewheel={{ forceToAxis: true }}
        speed={1800}
        loop={true}
        className="h-96 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full items-center justify-center">
              {" "}
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        <style jsx global>{`
          :root {
            --swiper-theme-color: theme("colors.swiper-theme");
            --swiper-pagination-bullet-inactive-color: theme(
              "colors.swiper-bullet-inactive"
            );
          }
        `}</style>
      </Swiper>
    </div>
  );
};
export default SwiperComponent;
