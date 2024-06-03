import { NewsType } from '@/lib/microcms';
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'red9m7kwt3',
  apiKey: 'oxxnEfx4XBHu1RCBKZSoAyWW3VvzwqBcE8qq',
});

export const fetchAllNews = async (): Promise<NewsType[] | null> => {
  try {
    const res = await client.getList({
      endpoint: 'news',
      queries: { limit: 100 },
      customRequestInit: {
        next: {
          revalidate: 10,
        },
      },
    });
    if (res.contents.length > 0) {
      return res.contents;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchNews = async (id: string): Promise<NewsType | null> => {
  try {
    const res = await client.get({
      endpoint: 'news',
      contentId: id,
    });

    return res;
  } catch (error) {
    console.error("error fetching news",error);
    return null;
  }
};
