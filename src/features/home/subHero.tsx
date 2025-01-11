import { LuGlobe } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
export default function HeaderTop() {
  return (
    <div className="flex justify-between items-center shadow-sm px-4 md:px-7 py-3">
      <div className="font-semibold text-2xl font-serif hover:opacity-85">
        On<span className="text-red-600 opacity-85">Res</span>
      </div>
      <div className="flex items-center gap-x-4">
        <div>
          <LuGlobe className="size-7 cursor-pointer hover:opacity-80" />
        </div>
        <div className="flex items-center gap-3 py-1 px-3 rounded-full ring-1 ring-zinc-200 hover:shadow-lg cursor-pointer">
          <div>
            <IoIosMenu className="size-5" />
          </div>
          <div className="p-2 rounded-full  bg-gray-300">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
}
