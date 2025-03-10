import { typeStudent, school } from "@/utils/optionList";
import { useEffect, useRef, useState } from "react";
import { useSearchForm } from "./SearchForm.hook";
import { SwiperSlide } from "swiper/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SearchForm() {
  const { fieldDmgType, fieldSchool, fieldName, fieldSort } = useSearchForm();

  const [color, setColor] = useState("#959595");
  const [targetDmg, setTargetDmg] = useState("");
  const [targetSchool, setTargetSchool] = useState("Abydos");

  const sliderRef = useRef<Slider | null>(null);

  const handleColor = () => {
    const targetColor = typeStudent.find(
      (student) => student.dmgName == targetDmg
    );

    setColor(targetColor ? targetColor.color : "#959595");
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const findIndexSchool = (sch: string) => {
    const targetSch = school.findIndex((s) => s.name == sch);
    return targetSch;
  };

  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  useEffect(() => {
    handleColor();
  }, [targetDmg]);

  useEffect(() => {
    goToSlide(findIndexSchool(targetSchool));
  }, [targetSchool]);

  return (
    <div className="shadow pb-4">
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {school.map((sch) => {
            return (
              <SwiperSlide key={sch.name}>
                <div
                  key={sch.name}
                  className="shrink-0 h-[240px] bg-center bg-cover border-b-2 border-[#DDDDDD]"
                  style={{
                    backgroundImage: `url(/images/bgSchool/${
                      sch.name == "Red Winter" ? "Red_Winter" : sch.name
                    }_Intro.webp)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>

      <form className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[90%] max-w-7xl mx-auto mt-4">
        <div className="flex flex-col">
          <label className="text-[12px]" htmlFor="damageType">
            Damage Type
          </label>
          <select
            {...fieldDmgType}
            className="border border-[#DDDDDD] text-white rounded-lg capitalize p-1 focus:outline-0"
            style={{ backgroundColor: color }}
            onChange={(e) => {
              setTargetDmg(e.target.value);
              fieldDmgType.onChange(e);
            }}
            id="damageType"
          >
            <option value="all" className="bg-[#959595]">
              all
            </option>
            {typeStudent.map((dmg) => {
              return (
                <option
                  className="text-white text-[16px]"
                  style={{ backgroundColor: dmg.color }}
                  value={dmg.dmgName}
                  key={dmg.dmgName}
                >
                  {dmg.dmgName}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[12px]" htmlFor="school">
            School
          </label>
          <select
            {...fieldSchool}
            onChange={(e) => {
              setTargetSchool(e.target.value);
              fieldSchool.onChange(e);
            }}
            className="border border-[#DDDDDD] bg-[#DAEEFD] rounded-lg capitalize p-1"
            id="school"
          >
            {school.map((sch) => {
              return (
                <option className="text-[16px]" value={sch.name} key={sch.name}>
                  {sch.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[12px]" htmlFor="name">
            Name
          </label>
          <div></div>
          <input
            {...fieldName}
            type="text"
            id="name"
            placeholder="Name"
            className="border border-[#DDDDDD] bg-[#DAEEFD] rounded-lg capitalize p-1 pl-2 focus:outline-0"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[12px]" htmlFor="sort">
            Sort
          </label>
          <select
            {...fieldSort}
            className="border border-[#DDDDDD] bg-[#DAEEFD] rounded-lg capitalize p-1"
            id="sort"
          >
            <option value="name">name</option>
            <option value="favorite">favorite</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
