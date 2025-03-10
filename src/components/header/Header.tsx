import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const toggleDropdown = () => {
    if (isOpen) {
      setIsClose(true);

      setTimeout(() => {
        setIsOpen(false);
        setIsClose(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="absolute">
      <div className="fixed top-0 w-full bg-white shadow z-10">
        <div className="flex justify-between items-center md:items-stretch md:justify-normal w-[90%] max-w-7xl mx-auto">
          <div className="py-2">
            <Link to="/">
              <img
                src="/images/mainLogo/logo.png"
                className="w-[156px] duration-150 hover:scale-110"
                alt="blueArchive_logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-end ml-8">
            <div className="py-2 px-2">
              <Link
                className="px-2 duration-100 hover:border-b-4 border-[#128AFA] text-[#787878] text-[18px] hover:text-black"
                to="/students/favorite"
              >
                My Student
              </Link>
            </div>
            <div className="py-2 px-2">
              <Link
                className="px-2 duration-100 hover:border-b-4 border-[#128AFA] text-[#787878] text-[18px] hover:text-black"
                to="/students"
              >
                All Student
              </Link>
            </div>
          </div>
          <div className="mt-4 md:hidden">
            <button onClick={toggleDropdown} className="text-[24px]">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div
              className={`absolute w-full h-screen bg-white border-t-1 border-[#979797] p-4 text-center ${
                isOpen
                  ? isClose
                    ? "animate-slide-out"
                    : "animate-slide-in"
                  : "hidden"
              }`}
            >
              <div className="my-4 text-[18px]">Student</div>
              <div className="flex justify-center">
                <div className="">
                  <Link
                    onClick={toggleDropdown}
                    className="px-2 duration-100 hover:border-b-4 border-[#128AFA] text-[#787878] text-[14px] md:text-[18px] hover:text-black"
                    to="/students/favorite"
                  >
                    My Student
                  </Link>
                </div>
                <div className="">
                  <Link
                    onClick={toggleDropdown}
                    className="px-2 duration-100 hover:border-b-4 border-[#128AFA] text-[#787878] text-[14px] md:text-[18px] hover:text-black"
                    to="/students"
                  >
                    All Student
                  </Link>
                </div>
              </div>
              <hr className="w-[75%] mx-auto mt-8 opacity-10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
