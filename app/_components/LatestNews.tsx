import { NewsType } from "@/lib/microcms";
import { fetchLatestNews } from "../client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const News = async () => {
  const news = await fetchLatestNews();

  return (
    <div className="container mx-auto my-12 sm:leading-10 w-full sm:w-[calc(100%-5rem)] lg:w-[calc(100%-20rem)]">
      <p className="py-2 text-xl font-semibold">News</p>
      {news != null ? (
        news.map((news: NewsType) => {
          return (
            <Link href={`/news/${news.id}`}>
              <div
                key={news.id}
                className="flex items-center hover:opacity-70 text-sm"
              >
                <p className="mr-2">
                  {new Date(news.updatedAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                </p>
                <p>{news.title}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>データがありませんでした。</p>
      )}
      <div className="flex items-center justify-center mt-10">
        <Button className="font-semibold bg-transparent border-cocoa border-0.5 px-20 py-5 ">
          <Link href="/news">最新情報一覧ページへ</Link>
        </Button>
      </div>
    </div>
  );
};

export default News;
