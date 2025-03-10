import { useParams } from "react-router-dom";
import { studentDetailService } from "@/service";
import { useEffect, useState } from "react";
import type { StudentDetail } from "@/interface/StudentDetail";
import { Loading } from "@/components/loading";
import { StudentCardDetail } from "@/components/studentCardDetail";

type StudenDetailResponse = {
  data?: StudentDetail;
  loading: boolean;
};

function DetailPage() {
  const { name } = useParams();
  const [studentInfo, setStudentInfo] = useState<StudenDetailResponse>({
    data: undefined,
    loading: true,
  });

  const fetchData = async (name: string) => {
    const res = await studentDetailService.getStudentDetail(name);

    if (res) {
      setStudentInfo({
        data: res,
        loading: false,
      });
    }
  };

  useEffect(() => {
    if (name) {
      fetchData(name);
    }
  }, []);

  return (
    <div
      className="flex w-full min-h-[calc(100vh-66px)] justify-center items-center"
      style={{
        backgroundImage: `url(/images/screenSchool/${
          studentInfo.data?.school == "Red Winter"
            ? "Red_Winter"
            : studentInfo.data?.school
        }_School.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {studentInfo.loading && (
        <div className="">
          <Loading />
        </div>
      )}

      {studentInfo.data && !studentInfo.loading && (
        <StudentCardDetail student={studentInfo.data} />
      )}
    </div>
  );
}

export default DetailPage;
