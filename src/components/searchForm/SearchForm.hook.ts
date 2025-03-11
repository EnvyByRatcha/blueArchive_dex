import { studentListService } from "@/service";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStudentListStore } from "@/store/studentList";
import { Student } from "@/interface/Student";

const useSearchForm = () => {
  const { register, watch } = useForm({
    defaultValues: {
      dmgType: "all",
      name: "",
      school: "Abydos",
      sort: `name`,
    },
  });

  const dmgType = watch("dmgType");
  const name = watch("name");
  const school = watch("school");
  const sort = watch("sort");

  const { setStudentList, setFetchStudent, fetchStudent } =
    useStudentListStore();

  const fetchData = async () => {
    setStudentList({
      data: [],
      loading: true,
    });
    setFetchStudent({
      data: [],
      loading: true,
    });

    const data = await studentListService.getStudentList();

    if (data) {
      setFetchStudent({
        data: data,
        loading: false,
      });

      if (sort == "name" || sort == "favorite") {
        const filterData = filterStudent(data, dmgType, school, name, sort);

        if (filterData) {
          setStudentList({
            data: filterData,
            loading: false,
          });
        }
      }
    }
  };

  const filterStudent = (
    studentList: Student[],
    dmgType: string,
    school: string,
    name: string,
    sort: `name` | `favorite`
  ): Student[] => {
    
    const nameFilter = studentList.filter((student) =>
      student.name.toLowerCase().includes(name?.toLowerCase())
    );

    const dmgFilter =
      dmgType !== "all"
        ? nameFilter.filter((student) =>
            student.damageType.toLowerCase().includes(dmgType.toLowerCase())
          )
        : nameFilter;

    const schoolFilter =
      school !== "all"
        ? dmgFilter.filter((student) =>
            student.school.toLowerCase().includes(school.toLowerCase())
          )
        : dmgFilter;

    return sortData(filterFavorite(schoolFilter), sort);
  };

  const filterFavorite = (studentList: Student[]) => {
    const store = localStorage.getItem("favoriteStudent");
    const favorites: Student[] = store ? JSON.parse(store) : [];

    return studentList.map((student) => ({
      ...student,
      favorite: favorites.some((fav) => fav._id === student._id),
    }));
  };

  const sortData = (data: Student[], sort: `name` | `favorite`) => {
    switch (sort) {
      case `name`:
        return data.sort((a, b) => a.name.localeCompare(b.name));
      case `favorite`:
        return data.sort((a, b) => {
          return a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1;
        });
      default:
        return data.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (sort == "name" || sort == "favorite") {
      const data = filterStudent(
        fetchStudent.data,
        dmgType,
        school,
        name,
        sort
      );
      setStudentList({
        data: data,
        loading: false,
      });
    }
  }, [name, dmgType, school, sort]);

  return {
    fieldDmgType: register("dmgType"),
    fieldSchool: register("school"),
    fieldName: register("name"),
    fieldSort: register("sort"),
  };
};

export { useSearchForm };
