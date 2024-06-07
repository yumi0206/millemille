import { ItemType } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

type ItemCardProps = {
  item: ItemType;
};
const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className="bg-white p-4 shadow-custom-6 ">
      <article>
        <Link href={`/item/${item.id}`} className="">
          <div className="relative mb-4 h-36 sm:h-52">
            {item.image && (
              <Image
                src={item.image.url}
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>

          <div className="mt-4">
            <div className="flex flex-col ">
              <h3 className="font-semibold truncate">{item.title}</h3>
              <p className="text-sm ">{item.category?.name}</p>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
export default ItemCard;
