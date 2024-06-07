import { ItemType } from "@/lib/microcms";
import { fetchAllitems } from "../client";

import ItemCard from "./ItemCard";

const ItemList = async () => {
  const item = await fetchAllitems();

  return (
    <div className="flex flex-col my-16">
      <div className="w-full text-base sm:leading-10">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {item != null ? (
            item.map((item: ItemType) => {
              return (
                <div key={item.id} className="hover:opacity-70">
                  <ItemCard item={item} />
                </div>
              );
            })
          ) : (
            <p>データがありませんでした。</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
