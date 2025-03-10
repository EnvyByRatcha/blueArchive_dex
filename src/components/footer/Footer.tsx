function Footer() {
  return (
    <div className="w-full text-center bg-white p-4 text-[16px] shadow- border-t-1 border-[#d6d6d6]">
      <div className="flex justify-between items-center w-[90%] max-w-7xl mx-auto text-center">
        <div className="text-[#787878] text-[14px]">
          <span>
            <i className="text-[16px] fa-solid fa-envelope-circle-check mr-2"></i>
          </span>
          ratchanon.mskcr@gmail.com
        </div>
        <div className="space-x-4 text-[20px]">
          <a
            className="cursor-pointer"
            href="https://github.com/EnvyByRatcha/blueArchive_dex"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
