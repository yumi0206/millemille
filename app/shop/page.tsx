import React from "react";
import { ProductType } from "@/lib/microcms";
import { fetchAllProducts } from "../client";

import AsideMenu from "./_components/AsideMenu";
import ProductCard from "./_components/ProductCard";

const Shop: React.FC = async () => {
  const products = await fetchAllProducts();
  if (!products) return <div>No products available</div>;

  // カテゴリーごとに商品をグループ化
  let groupedproducts: Record<
    string,
    { name: string; products: ProductType[] }
  >;
  groupedproducts = products.reduce((acc, product) => {
    const categoryId = product.category?.id || "uncategorized";
    if (!acc[categoryId]) {
      acc[categoryId] = {
        name: product.category?.name || "Uncategorized",
        products: [],
      };
    }
    acc[categoryId].products.push(product);
    return acc;
  }, {} as Record<string, { name: string; products: ProductType[] }>);

  const categories = Object.entries(groupedproducts).map(([id, { name }]) => ({
    id,
    name,
  }));

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row ">
      <AsideMenu categories={categories} />
      <main className="w-full md:w-4/5 md:pl-8">
        {Object.entries(groupedproducts).map(
          ([categoryId, { name, products }]) => (
            <section key={categoryId} id={categoryId} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product: ProductType) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )
        )}
      </main>
    </div>
  );
};

export default Shop;
