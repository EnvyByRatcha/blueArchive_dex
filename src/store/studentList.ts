import { create } from "zustand";
import type { Student } from "@/interface/Student";

const initStore = {
  student: {
    data: [],
    loading: true,
  },
  fetchStudent: {
    data: [],
    loading: true,
  },
};

type studentType = {
  data: Student[];
  loading: boolean;
};

type useStudentListStoreType = {
  student: studentType;
  fetchStudent: studentType;
  setStudentList: (value: studentType) => void;
  setFetchStudent: (value: studentType) => void;
  //clearStudent: () => void;
};

export const useStudentListStore = create<useStudentListStoreType>((set) => ({
  ...initStore,
  setStudentList: (value: studentType) => set({ student: value }),
  setFetchStudent: (value: studentType) => set({ fetchStudent: value }),
  //clearStudent: () => set({ ...initStore }),
}));
