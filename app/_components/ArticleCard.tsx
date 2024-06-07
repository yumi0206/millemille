import { NewsType } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  news: NewsType;
};
const ArticleCard = ({ news }: ArticleCardProps) => {
  return (
    <div className="bg-white p-4 shadow-custom-6 rounded-lg">
      <article>
        <Link href={`/news/${news.id}`} className="">
          <div className="relative h-60 xl:h-80 mb-4">
            {news.thumbnail && (
              <Image
                src={news.thumbnail.url}
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="mt-8 mb-4">
            <div className="flex items-center mb-2">
              <p className="text-sm mr-2">
                {new Date(news.updatedAt)
                  .toISOString()
                  .slice(0, 10)
                  .replace(/-/g, ".")}
              </p>
              <p className="text-sm">/</p>
              <p className="text-sm  ml-2">{news.category?.name}</p>
            </div>
            <h3 className="text-xl font-bold mb-2 truncate">{news.title}</h3>
            <p
              className="text-sm line-clamp-3"
              dangerouslySetInnerHTML={{
                __html:
                  news.content.length > 40
                    ? `${news.content
                        .substring(0, 40)
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
