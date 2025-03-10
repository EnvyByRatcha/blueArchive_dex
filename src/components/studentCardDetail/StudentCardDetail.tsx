import type { StudentDetail } from "@/interface/StudentDetail";
import { useRef } from "react";

interface studentDetailProps {
  student: StudentDetail;
}

function StudentCardDetail({ student }: studentDetailProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  };

  return (
    <div
      className="w-[578px] md:h-[328px] rounded-3xl p-6 mx-auto border-2 border-[#DDDDDD] shadow-xl md:bg-cover"
      style={{
        backgroundImage: `url(/images/bgSchool/${
          student.school == "Red Winter" ? "Red_Winter" : student.school
        }_Intro.webp)`,
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/80 backdrop-blur-m p-2 rounded-xl w-full h-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[20px] font-semibold gap-2">
            <img src={student.imageSchool} alt={student.name} />
            <span>{`${student.school} School`}</span>
          </div>
          <div className="bg-white text-[18px] font-semibold px-4 border-[#979797] rounded-[8px]">
            {student.role[1]}
          </div>
        </div>
        <div className="w-full h-[4px] bg-[#ffffff] mt-1"></div>
        <div className="flex flex-col md:flex-row gap-4 my-4 px-4 md:px-2">
          <div className="md:w-[148px] mx-auto">
            <img src={student.photoUrl} alt="" />
          </div>
          <div className="flex-1">
            <div>
              <label className="text-[14px] text-[#5a5a5a]" htmlFor="name">
                NAME
              </label>
              <div className="flex flex-wrap text-[24px] -mt-2" id="name">
                {`${student.names.firstName} ${student.names.lastName}`}
              </div>
              <div className="text-[16px] -mt-1">{`( ${student.names.japanName} )`}</div>
            </div>
            <div className="flex gap-[48px] mt-2">
              <div>
                <label className="text-[14px] text-[#5a5a5a]" htmlFor="born">
                  BORN
                </label>
                <div className="text-[16px] -mt-2" id="born">
                  {student.birthday}
                </div>
              </div>
              <div>
                <label className="text-[14px] text-[#5a5a5a]" htmlFor="age">
                  AGE
                </label>
                <div className="text-[16px] -mt-2" id="age">
                  {student.age}
                </div>
              </div>
              <div>
                <label className="text-[14px] text-[#5a5a5a]" htmlFor="height">
                  HEIGHT
                </label>
                <div className="text-[16px] -mt-2" id="height">
                  {student.height}
                </div>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <div className="mt-2">
                <label className="text-[14px] text-[#5a5a5a]" htmlFor="voice">
                  VOICE
                </label>
                <div className="text-[16px] -mt-2">{student.voice}</div>
              </div>
              <div className="flex items-end">
                <button
                  onClick={handlePlay}
                  className="bg-[#DAEEFD] transition-all duration-150 cursor-pointer hover:bg-white border-[#D4D4D4] border-1 mt-2 rounded-xl px-2 text-[14px]"
                >
                  VOICE
                </button>
              </div>
            </div>
            <audio id="soundStudent" className="hidden" ref={audioRef} controls>
              <source src={student.voices} type="audio/ogg" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCardDetail;
