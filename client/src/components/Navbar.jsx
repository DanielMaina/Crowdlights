import React, {useContext} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { CrowdlightsContext } from "../context/CrowdlightsContext";

import logo from "../assets/homeIcon.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { connectWallet, currentAccount, formData, setFormData, handleChange } = useContext(CrowdlightsContext);


  return (
    <nav className="w-full flex md:justify-center justify-between items-center lg:justify-between p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-12 cursor-pointer" />
      </div>
      <ul className="text-white md:flex lg:ml-64 hidden list-none flex-row justify-between items-center flex-initial">
        {["", "", "", ""].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <button
        type="button"
        onClick={connectWallet}
        className="flex flex-row justify-center items-center my-5 lg:ml-64 p-3 border border-gray-400 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
            {/* <AiFillPlayCircle className="mr-2 text-white" /> */}
            <p className="text-base font-semibold text-white">
            Connect Wallet
            </p>
        </button>

      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
        <button
        type="button"
        onClick={connectWallet}
        className="flex flex-row justify-center items-center my-5 p-3 border border-gray-400 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
        {/* <AiFillPlayCircle className="mr-2 text-white" /> */}
        <p className="text-base font-semibold text-white">
            Connect Wallet
        </p>
        </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar;