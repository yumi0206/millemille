import React from "react";
import Link from "next/link";

type Category = {
  id: string;
  name: string;
};

type AsideMenuProps = {
  categories: Category[];
};

const AsideMenu: React.FC<AsideMenuProps> = ({ categories }) => {
  return (
    <aside className="w-full md:mt-16 md:w-1/5 md:sticky md:top-20 md:h-screen overflow-auto">
      <div className="p-4 w-full">
        <h3 className="font-bold mb-2">Category</h3>
        <ul className="mt-2 space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`#${category.id}`}
                className="hover:text-gray-400 transition-colors duration-200"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideMenu;
