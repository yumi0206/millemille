import React from "react";
import { fetchNews } from "@/app/client";

import DOMPurify from "dompurify";
import parse from "html-react-parser";
import Loading from "@/app/_components/Loading";

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
    <div className="container mt-12 mb-28 mx-auto">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-12">
        <p className="text-sm">  {new Date(news.updatedAt).toISOString().slice(0, 10).replace(/-/g, '.')}</p>
        <h1 className="text-2xl font-bold my-4">{news?.title}</h1>
        <div className="flex items-center mb-4 text-sm">
          <p className="">{news?.category?.name}</p>
        </div>
        <img
          src={news?.thumbnail?.url}
          alt="thumbnail"
          className="w-full h-80 sm:h-96 object-cover rounded-lg"
        />
        <div className="mt-8 mb-8">
          <div className="prose max-w-none">{parse(news?.content)}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
