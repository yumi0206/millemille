import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ProductType } from "@/lib/microcms";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/shop/product/${product.id}`} passHref>
      <Card className="overflow-hidden hover:opacity-70 transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-square w-full p-4">
            <Image
              src={product.images[0].url}
              alt={product.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-center products-center">
            <h3 className="font-bold text-sm mb-2 truncate max-w-[90%] text-center">
              {product.title}
            </h3>
            <p className="text-gray-500 font-semibold text-sm">
              ¥ {product.price.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
