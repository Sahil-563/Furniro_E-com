import { CiUser, CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import logo from "/logo.png";
import { useState } from "react";
function Header() {
  const [click, setClick] = useState(false);
  const toggleVisibility = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="w-full h-[120px] flex items-center justify-between relative">
        <div className="flex items-center md:pl-[50px] pl-[10px] hover:cursor-pointer">
          <img className="w-[90px] h-[100px]" src={logo} alt="logo" />
          <p className="sm:block text-4xl font-bold pr-5 hidden">Furniro</p>
        </div>

        <ul
          className={`lg:pl-[80px] flex w-screen items-center text-lg bg-slate-200 font-medium z-10 flex-col justify-center h-screen absolute top-0 lg:flex-row lg:relative lg:z-0 lg:h-fit lg:bg-inherit ${
            click ? "left-0" : "-left-full lg:left-0"
          }`}
        >
          <li className="px-10 hover:cursor-pointer">Home</li>
          <li className="px-10 hover:cursor-pointer">Shop</li>
          <li className="px-10 hover:cursor-pointer">About</li>
          <li className="px-10 hover:cursor-pointer">Contact</li>
        </ul>
        <div className="flex  items-center md:pr-[50px]">
          <span className="md:pr-5 hover:cursor-pointer">
            <CiUser className="stroke-1" size={"30px"} />
          </span>
          <span className="md:px-5 px-2 hover:cursor-pointer">
            <CiSearch className="stroke-1" size={"30px"} />
          </span>
          <span className="md:px-5 px-2 hover:cursor-pointer">
            <CiHeart className="stroke-1" size={"30px"} />
          </span>
          <span className="md:px-5 px-2 hover:cursor-pointer">
            <CiShoppingCart className="stroke-1" size={"30px"} />
          </span>
        </div>
        <button
          onClick={toggleVisibility}
          className="md:pr-[50px] z-10 pr-[10px] lg:hidden  right-0"
        >
          {click ? (
            <IoCloseOutline size={"30px"} />
          ) : (
            <RxHamburgerMenu size={"30px"} />
          )}
        </button>
      </div>
    </>
  );
}

export default Header;
