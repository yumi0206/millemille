"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MicroCMSImage } from "microcms-js-sdk";

interface ProductImagesProps {
  images: MicroCMSImage[];
  title: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg mb-4 ">
        <Image
          src={currentImage.url}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(image)}
            className={`relative w-20 h-20 rounded-md overflow-hidden ${
              currentImage.url === image.url ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image
              src={image.url}
              alt={`${title} - Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
