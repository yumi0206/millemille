import { NewsType } from "@/lib/microcms";
import { fetchLatestNews } from "../client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const News = async () => {
  const news = await fetchLatestNews();

  return (
    <div className="my-12 sm:leading-10 w-full px-4 sm:px-0">
      <p className="py-2 text-xl font-semibold">News</p>
      {news != null ? (
        news.map((newsItem: NewsType) => {
          return (
            <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
              <div
                key={newsItem.id}
                className="flex items-start hover:opacity-70 text-sm"
              >
                <p className="mr-2">
                  {new Date(newsItem.updatedAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                </p>
                <p>{newsItem.title}</p>
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
