import React from 'react';
import Link from "next/link";

const Aside = () => {
  return (
    <aside className="w-full md:w-1/5 flex items-center px-3 md:pl-6 h-full border-l-1">
      <div className="p-4 mb-6 mt-4 w-full flex-row md:flex-col">
        <h3 className="font-bold mb-2">Category</h3>
        <ul className="mt-2">
          <li>
            <Link href="#">Technology</Link>
          </li>
          <li>
            <Link href="#">Automotive</Link>
          </li>
          <li>
            <Link href="#">Finance</Link>
          </li>
          <li>
            <Link href="#">Sports</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;