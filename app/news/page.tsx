import { NewsType } from "@/lib/microcms";
import { fetchAllNews } from "../client";
import Aside from "../_components/Aside";
import ArticleCard from "../_components/ArticleCard";

// async function news() {
//   try {
//     const response = await client.getList({
//       endpoint: "news",
//       customRequestInit: {
//         next: {
//           revalidate: 0, // 0秒でページを再読み込み
//         },
//       },
// //     });

//     return NextResponse.json({
//       data: response.contents ?? null,
//       error: null,
//     });
//   } catch (error: any) {
//     console.error("エラーが発生しました", error);
//     return NextResponse.json({
//       data: null,
//       error: error.message,
//     });
//   }
// }

const News = async () => {
  const news = await fetchAllNews();

  return (
    <div className="mx-auto max-w-[1000px] 2xl:max-w-[1200px] my-16 text-base md:leading-10 md:w-[calc(100%-10rem)] flex flex-col md:flex-row">
      <div className="md:w-4/5 order-1 md:order-2">
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
      <Aside />
    </div>
  );
};

export default News;
