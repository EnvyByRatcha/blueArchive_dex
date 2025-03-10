import type { Student } from "@/interface/Student";
import { useState } from "react";
import { typeStudent } from "@/utils/optionList";
import { Link } from "react-router-dom";

function StudentCard({
  _id,
  name,
  school,
  photoUrl,
  damageType,
  armorType,
  favorite,
  onRemove,
}: Student) {
  const [myFavorite, setMyFavorite] = useState(favorite);

  const setColorDmgType = (dmgSelect: string) => {
    const data = typeStudent.find((dmg) => dmg.dmgName === dmgSelect);
    return data?.color;
  };

  const setColorArmType = (armSelect: string) => {
    const data = typeStudent.find((dmg) => dmg.armorName === armSelect);
    return data?.color;
  };

  const saveFavorite = () => {
    const store = localStorage.getItem("favoriteStudent");
    const favorites: Student[] = store ? JSON.parse(store) : [];

    const data = favorites.filter((student) => student._id == _id);

    if (data.length !== 0) {
      const updataData = favorites.filter((student) => student._id !== _id);

      onRemove?.(_id);

      localStorage.setItem("favoriteStudent", JSON.stringify(updataData));
    } else {
      const updataData = [
        ...favorites,
        { _id, name, photoUrl, damageType, armorType, favorite: true },
      ];
      localStorage.setItem("favoriteStudent", JSON.stringify(updataData));
    }

    setMyFavorite(!myFavorite);
  };

  return (
    <div className="bg-[#DAEEFD] p-2 rounded-lg drop-shadow-xl border border-[#979797] transition-all duration-150 hover:scale-105">
      <div className="text-[14px] lg:text-[16px] text-center bg-white mb-2 rounded-[8px]">
        {name}
      </div>
      <div className="relative">
        <Link to={`/students/details/${name}`} className="flex justify-center">
          <img className="" src={photoUrl} alt={name} />
        </Link>
        <svg
          onClick={saveFavorite}
          className="absolute top-[8px] right-[8px]"
          width="24px"
          height="24px"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.03553 1C1.80677 1 0 2.80677 0 5.03553C0 6.10582 0.42517 7.13228 1.18198 7.88909L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553C15 2.80677 13.1932 1 10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L7.5 2.79289L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1Z"
            fill={myFavorite ? "#ff0000" : "#ffff"}
          />
        </svg>
        <div className="hidden">{school}</div>
      </div>
      <div className="flex mt-2 text-[14px] text-white">
        <div
          className="w-[50%] rounded-l-[8px] text-center border-r-2 border-[#DAEEFD]"
          style={{ backgroundColor: setColorDmgType(damageType) }}
        >
          {damageType}
        </div>
        <div
          className="w-[50%] rounded-r-[8px] text-center"
          style={{ backgroundColor: setColorArmType(armorType) }}
        >
          {armorType}
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
