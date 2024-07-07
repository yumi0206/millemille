import React from "react";
import { notFound } from "next/navigation";
import { fetchProduct } from "@/app/client";
import ProductImages from "./_components/ProductImages";
import ProductOrderForm from "./_components/ProductOrderForm";
import BreadcrumbWithCustomSeparator from "./_components/Breadcrumb";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <BreadcrumbWithCustomSeparator name={product.title} />
      <div className="container mx-auto px-4 py-8 max-w-[1000px]">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <ProductImages images={product.images} title={product.title} />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              ¥ {product.price.toLocaleString()}（税込）
            </p>
            {product.category && (
              <p className="text-xs text-gray-500 mb-4">
                Category: {product.category.name}
              </p>
            )}

            <ProductOrderForm product={product} />

            <div className="prose max-w-none mt-8">
              <h2 className="text-lg font-semibold mb-2">商品詳細</h2>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">注意事項</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>本商品は店頭受取商品です。配送には対応しておりません。</li>
                <li>
                  ご予約内容の確認のため店舗よりお電話させていただく場合がございます。
                </li>
                <li>
                  ご注文後のキャンセル、お受取日時変更は、お受取予定の4日前までにお受取予定の店舗へご連絡ください。
                </li>
                <li>
                  ご注文完了時の自動返信メールを予約受取票とさせていただきます。大切に保管してください。
                </li>
                <li>
                  お受取予定日時にご来店がなく、店舗へのご連絡も無い場合は、キャンセル扱いとさせていただきます。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
