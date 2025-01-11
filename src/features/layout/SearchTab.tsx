import { IoSearch } from "react-icons/io5";

export default function SearchTab() {
  return (
    <div className="max-w-xl mx-3 md:mx-auto  shadow-md hover:shadow-lg rounded-full px-4 md:pl-7 py-1 md:py-2 my-6 ring-1 ring-zinc-100">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search here..."
          className="flex-1 outline-none text-zinc-700"
        />
        <div className=" bg-red-600 opacity-85 hover:opacity-100 hover:ring-2 ring-red-500 flex items-center justify-end p-3 rounded-full">
          <IoSearch className="text-white size-5" />
        </div>
      </div>
    </div>
  );
}
