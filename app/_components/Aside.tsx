import React from "react";
import Link from "next/link";

const Aside: React.FC = () => {
  return (
    <aside className="w-full md:w-1/5 order-2 md:order-none mt-8 md:mt-0 md:pl-6">
      <div className="p-4 w-full">
        <h3 className="font-bold mb-2">Category</h3>
        <ul className="mt-2">
          <li>
            <Link href="#">お知らせ</Link>
          </li>
          <li>
            <Link href="#">新商品</Link>
          </li>
          <li>
            <Link href="#">イベント</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
