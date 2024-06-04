// LatestNews.tsx
import React from 'react';
import { NewsType } from '@/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';

interface LatestNewsProps {
  articles: NewsType[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ articles }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">最新ニュース</h2>
      <ul>
        {articles.slice(0, 3).map((article) => (
          <li key={article.id} className="mb-8">
            <Link href={`/news/${article.id}`} className="text-gray-500">
              <div className="relative h-40 xl:h-60 mb-4">
                {article.thumbnail && (
                  <Image
                    src={article.thumbnail.url}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <p className="text-sm mr-2">
                    {new Date(article.updatedAt)
                      .toISOString()
                      .slice(0, 10)
                      .replace(/-/g, '.')}
                  </p>
                  <p className="text-sm">/</p>
                  <p className="text-sm ml-2">{article.category?.name}</p>
                </div>
                <h3 className="text-xl font-bold mb-2 truncate">
                  {article.title}
                </h3>
                <p
                  className="text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      article.content.length > 120
                        ? `${article.content
                            .substring(0, 120)
                            .replace(/<\/?[^>]+(>|$)/g, '')}...`
                        : article.content.replace(/<\/?[^>]+(>|$)/g, ''),
                  }}
                ></p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestNews;