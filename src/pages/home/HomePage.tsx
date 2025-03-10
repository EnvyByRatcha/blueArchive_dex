import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useRef, useState } from "react";

function HomePage() {
  const [isMute, setIsMute] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.muted = !isMute;
      setIsMute(!isMute);
    }
  };

  return (
    <>
      <Header />

      <div className="relative w-full h-[100vh]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMute}
          autoPlay
          loop
        >
          <source src="/video/promoteVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-[calc(66px+16px)] right-4">
          <button
            onClick={handleMute}
            className="relative overflow-hidden justify-center items-center transition-all duration-150 bg-white/30 backdrop-blur-none border-2 border-gray-500 px-2 py-1 rounded-full shadow-lg cursor-pointer hover:scale-110"
          >
            <i className="fa fa-music text-gray-700"></i>
            <div
              className="absolute top-[50%] left-0 rotate-45 bg-gray-400 w-[40px] h-[4px]"
              style={{ display: isMute ? "flex" : "none" }}
            ></div>
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
