const Aside = () => {
  return (
    <aside className="w-full md:w-1/5 flex items-center px-3 md:pl-6 h-full border-l-1">
      <div className="bg-white p-4 mb-6 mt-4 w-full flex-row md:flex-col">
        <h3 className="font-bold mb-2">Category</h3>
        <ul className="mt-2">
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Automotive</a>
          </li>
          <li>
            <a href="#">Finance</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Aside;
