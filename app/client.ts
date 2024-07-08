import { ProductType, NewsType } from "@/lib/microcms";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
});
export const fetchAllProducts = async (): Promise<ProductType[]> => {
  try {
    const res = await client.getList({
      endpoint: "product",
      queries: { limit: 100 },
      customRequestInit: {
        // Using force-cache
        cache: "force-cache",
        next: {
          tags: ["products"], // Still including tags for on-demand revalidation
        },
      },
    });
    return res.contents;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};

export const fetchProduct = async (id: string): Promise<ProductType | null> => {
  try {
    const res = await client.get({
      endpoint: "product",
      contentId: id,
      customRequestInit: {
        // Using force-cache
        cache: "force-cache",
        next: {
          tags: [`product-${id}`, "products"], // Still including tags for on-demand revalidation
        },
      },
    });
    return res;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null;
  }
};

export const fetchAllNews = async (): Promise<NewsType[] | null> => {
  try {
    const res = await client.getList({
      endpoint: "news",
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
      endpoint: "news",
      contentId: id,
    });

    return res;
  } catch (error) {
    console.error("error fetching news", error);
    return null;
  }
};

export const fetchLatestNews = async (): Promise<NewsType[] | null> => {
  try {
    const res = await client.getList({
      endpoint: "news",
      queries: { limit: 3, orders: "-publishedAt" },
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
