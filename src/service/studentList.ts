import { BASE_URL } from "@/utils/constant";
import axios from "axios";
import type { Student } from "@/interface/Student";

interface StudentResponse {
  data: Student[];
}

export const studentListService = {
  getStudentList: async (): Promise<Student[]> => {
    const res = await axios.get(`${BASE_URL}/api/characters/students`, {
      params: {
        page: 1,
        perPage: 119,
      },
    });

    const result: StudentResponse = res.data;

    return result.data.map(
      ({ _id, name, school, photoUrl, damageType, armorType }) => {
        return {
          _id,
          name,
          school,
          photoUrl,
          damageType,
          armorType,
        };
      }
    );
  },
};
