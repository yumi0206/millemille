import { NewsType } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  news: NewsType;
};

const ArticleCard = ({ news }: ArticleCardProps) => {
  return (
    <div className="bg-white p-4 px-8 sm:px-6 mx-2 md:mx-0 shadow-custom-6 h-[500px] flex flex-col ">
      <article className="flex flex-col h-full">
        <Link href={`/news/${news.id}`} className="flex flex-col h-full">
          <div className="relative h-60  mb-4 flex-shrink-0">
            {news.thumbnail && (
              <Image
                src={news.thumbnail.url}
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="flex flex-col flex-grow">
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
            <h3 className="text-xl font-bold mb-2 line-clamp-2">
              {news.title}
            </h3>
            <p
              className="text-sm line-clamp-4 lg:line-clamp-2 overflow-hidden"
              dangerouslySetInnerHTML={{
                __html:
                  news.content.length > 0
                    ? `${news.content
                        .substring(0, 200)
                        .replace(/<\/?[^>]+(>|$)/g, "")}...`
                    : news.content.replace(/<\/?[^>]+(>|$)/g, ""),
              }}
            ></p>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default ArticleCard;
