import { BASE_URL } from "@/utils/constant";
import axios from "axios";
import type { StudentDetail } from "@/interface/StudentDetail";

interface StudentDetailResponse {
  data: StudentDetail[];
}

export const studentDetailService = {
  getStudentDetail: async (name: string): Promise<StudentDetail> => {
    const res = await axios.get(`${BASE_URL}/api/characters/students`, {
      params: {
        name: name,
      },
    });

    const result: StudentDetailResponse = res.data;

    return result.data[0];
  },
};
