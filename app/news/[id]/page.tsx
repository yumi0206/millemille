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

export const revalidate = 3600

const NewsPage = async ({ params }: NewsPageProps) => {
  const news = await fetchNews(params.id);
  console.log(news);

  if (!news) return <Loading/>;

  return (
    <div className="max-w-4xl mx-auto">
      <img
        src={news?.thumbnail?.url}
        alt="thumbnail"
        className="w-full h-80 sm:h-96 object-cover rounded-lg"
      />
      <div className="mt-8 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">{news?.title}</h1>
        <div className="flex items-center mb-4">
          <p className="mr-4">{news?.updatedAt}</p>
          <p>/</p>
          <p className="ml-4">{news?.category?.name}</p>
        </div>
        <div className="prose max-w-none">
          {parse(news?.content)}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
