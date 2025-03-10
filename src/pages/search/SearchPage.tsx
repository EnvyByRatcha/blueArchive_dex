import { Loading } from "@/components/loading";
import { SearchForm } from "@/components/searchForm";
import { StudentCard } from "@/components/studentCard";
import { useStudentListStore } from "@/store/studentList";

function SearchPage() {
  const { student } = useStudentListStore();

  return (
    <>
      <SearchForm />
      <div className="w-[90%] max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-2">
          {student.loading && (
            <div>
              <Loading />
            </div>
          )}

          {!student.loading &&
            student.data.map((student) => {
              return (
                <StudentCard
                  key={student._id}
                  _id={student._id}
                  name={student.name}
                  school={student.school}
                  photoUrl={student.photoUrl}
                  damageType={student.damageType}
                  armorType={student.armorType}
                  favorite={student.favorite}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
