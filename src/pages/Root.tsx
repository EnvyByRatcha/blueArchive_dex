import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      {/* <div className="bg-[url(/images/bgHeader.jpg)] bg-cover w-full h-[240px]"></div> */}
      <div className="mt-[66px] min-h-[calc(100vh-128px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
