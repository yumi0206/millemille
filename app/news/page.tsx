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
    <div className="mx-auto my-16 text-base sm:leading-10 sm:w-[calc(100%-10rem)] md:flex">
      <div className="grid md:grid-cols-2 md:w-4/5">
        {news != null ? (
          news.map((news: NewsType) => {
            return (
              <div key={news.id} className="hover:opacity-70">
                <ArticleCard news={news} />
              </div>
            );
          })
        ) : (
          <p>データがありませんでした。</p>
        )}
      </div>
      <Aside />
    </div>
  );
};

export default News;
