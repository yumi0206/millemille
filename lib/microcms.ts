// src/libs/microcms.ts

import type {
  MicroCMSQueries,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import { notFound } from "next/navigation";

export const client = createClient({
  serviceDomain: "red9m7kwt3",
  apiKey: "oxxnEfx4XBHu1RCBKZSoAyWW3VvzwqBcE8qq",
});

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// カテゴリーの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Category>({
      endpoint: "categories",
      queries,
    })
    .catch(notFound);

  return listData;
};

// カテゴリーの詳細を取得
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Category>({
      endpoint: "categories",
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

export type NewsType = {
  id: string;
  title: string;
  content: string;
  thumbnail: {
    url:string;
    height: number;
    width:number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category?: Category;
};
