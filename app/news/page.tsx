import { NewsType, client } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { NextResponse } from "next/server";
import { fetchAllNews } from "../client";

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

  console.log(news);
  // const extractImageUrl = (content: string) => {
  //   const imgRegex = /<img.*?src="(.*?)".*?>/;
  //   const match = content.match(imgRegex);
  //   return match ? match[1] : null;
  // };

  return (
    <div className="container mx-auto my-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news != null ? (
          news.map((news: NewsType) => {
            // const imageUrl = extractImageUrl(news.content);
            return (
              <div key={news.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="relative h-48 mb-4">
                  {news.thumbnail && (
                    <Image
                      src={news.thumbnail.url}
                      alt=""
                      fill
                      className="object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <p className="text-sm text-gray-600 mr-2">
                      {new Date(news.updatedAt).toISOString().slice(0, 10).replace(/-/g, '.')}
                    </p>
                    <p className="text-sm text-gray-600">/</p>
                    <p className="text-sm text-gray-600 ml-2">
                      {news.category?.name}
                    </p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 truncate">{news.title}</h3>
                  <p className="text-gray-700 text-sm line-clamp-3" dangerouslySetInnerHTML={{
                    __html:
                      news.content.length > 120
                        ? `${news.content.substring(0, 120).replace(/<\/?[^>]+(>|$)/g, '')}...`
                        : news.content.replace(/<\/?[^>]+(>|$)/g, ''),
                  }}></p>
                </div>
                <div className="mt-4">
                  <Link href={`/news/${news.id}`} className="text-gray-500 hover:underline">
                    続きを読む
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p>データがありませんでした。</p>
        )}
      </div>
    </div>
  );
};

export default News;