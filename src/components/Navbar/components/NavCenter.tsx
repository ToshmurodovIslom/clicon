import { NavLink } from "react-router-dom";
import LogoCircle from "../../icons/logoCircle.svg";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";

function NavCenter() {
  return (
    <div className="layout h-88p bg-Secondary-700 flex items-center justify-between text-white">
      <NavLink to={"/"} className={"flex items-center justify-start gap-2"}>
        <img className="w-12 h-12" src={LogoCircle} alt="Logo Dumolog'i" />
        <span className="text-4xl font-bold">CLICON</span>
      </NavLink>
      <div className="h-12 w-646p bg-white text-black flex items-center flex-row justify-between px-5 py-3.5 rounded-lg gap-3.5">
        <input
          className=" outline-none text-lg flex-1"
          type="text"
          placeholder="Search for anything..."
        />
        <IoSearchOutline className="h-5 w-5" />
      </div>
      <div className=" *:h-8 *:w-8 flex flex-row items-center justify-end gap-6 *:cursor-pointer">
        <PiShoppingCartSimple />
        <FaRegHeart />
        <AiOutlineUser />
      </div>
    </div>
  );
}

export default NavCenter;
