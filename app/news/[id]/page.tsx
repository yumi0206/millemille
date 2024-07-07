import React from "react";
import { fetchNews } from "@/app/client";

import DOMPurify from "dompurify";
import parse from "html-react-parser";
import Loading from "@/app/_components/Loading";
import Image from "next/image";

type NewsPageProps = {
  params: {
    id: string;
  };
};

export const revalidate = 3600;

const NewsPage = async ({ params }: NewsPageProps) => {
  const news = await fetchNews(params.id);
  console.log(news);

  if (!news) return <Loading />;

  return (
    <div className=" container mt-12 mb-28 mx-auto">
      <div className="bg-white max-w-4xl mx-auto pt-8 pb-20 px-6 sm:px-12 lg:px-12 rounded-lg">
        <div className="flex items-center mb-2">
          <p className="text-sm mr-2">
            {new Date(news.updatedAt)
              .toISOString()
              .slice(0, 10)
              .replace(/-/g, ".")}
          </p>
          <p className="text-sm">/</p>
          <p className="text-sm ml-2">{news.category?.name}</p>
        </div>
        <h1 className="text-2xl font-bold pb-8">{news?.title}</h1>

        <Image
          src={news?.thumbnail?.url}
          alt="thumbnail"
          className="w-full h-80 sm:h-96 object-cover rounded-lg"
          width={1000}
          height={1000}
        />
        <div className="mt-8 mb-8">
          <div className="prose max-w-none">{parse(news?.content)}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
