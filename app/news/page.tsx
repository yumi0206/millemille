import { NewsType } from "@/lib/microcms";
import { fetchAllNews } from "../client";
import ArticleCard from "../_components/ArticleCard";

const News = async () => {
  const news = await fetchAllNews();

  return (
    <div className="mx-auto max-w-[1000px] 2xl:max-w-[1200px] my-16 text-base md:leading-10">
      <div className="grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {news != null ? (
          news.map((news: NewsType) => (
            <div key={news.id} className="hover:opacity-70">
              <ArticleCard news={news} />
            </div>
          ))
        ) : (
          <p>データがありませんでした。</p>
        )}
      </div>
    </div>
  );
};

export default News;