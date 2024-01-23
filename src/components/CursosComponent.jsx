import { useEffect, useState } from "react";
import { getI18N } from "../i18n";

const CursosComponent = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale })

  const numOfCourses = 15;
  const [selectorCourse, setSelectorCourse] = useState(15);
  const [typeColor, setTypeColor] = useState('');
  const handleIncrementCourse = () => {
    selectorCourse >= 1 && selectorCourse < numOfCourses
      ? setSelectorCourse(selectorCourse + 1)
      : selectorCourse;
  };

  const handleDecrementCourse = () => {
    selectorCourse > 1 ? setSelectorCourse(selectorCourse - 1) : selectorCourse;
  };
  
  useEffect(() => {
    const courseType = i18n.COURSES[selectorCourse].type;
  
    if (courseType === 'Learning' || courseType === 'Aprendizaje' || courseType === 'Aprenentatge') {
      setTypeColor('bg-green-400');
    } else if (courseType === 'Talk' || courseType === 'Charla' || courseType === 'Xerrada') {
      setTypeColor('bg-red-400');
    } else if (courseType === 'Hackathon' || courseType === 'Hackatón' || courseType === 'Hackató') {
      setTypeColor('bg-blue-400');
    }
  }, [selectorCourse]);

  return (
    <>
      <div className="absolute top-0 right-0 flex gap-x-2 justify-end p-4 h-fit">
        <button className="h-fit px-1 rounded-sm text-sm bg-[#B19470] dark:bg-[#83643e] hover:bg-[#ceaf89] hover:dark:bg-[#B19470]" onClick={handleIncrementCourse}>{i18n.COURSES.BUTTONS.NEWEST}</button>
        <button className="h-fit px-1 rounded-sm text-sm bg-[#B19470] dark:bg-[#83643e] hover:bg-[#ceaf89] hover:dark:bg-[#B19470]" onClick={handleDecrementCourse}>{i18n.COURSES.BUTTONS.OLDEST}</button>
      </div>
      <p className="text-lg pl-4 line-clamp-1 pt-1">{i18n.COURSES[selectorCourse].name}</p>    
      <div className="flex items-center text-xs pl-6 pb-4">
        <p className="line-clamp-1">{i18n.COURSES[selectorCourse].timedate}&nbsp;—&nbsp;</p>
        <div className={`size-2 rounded-full ${typeColor}`}></div>
        <p>&nbsp;{i18n.COURSES[selectorCourse].type}</p>
      </div>
      <div className="flex items-center justify-around text-[10px] text-center mx-auto gap-x-8">
        <a className="px-4 py-1 bg-[#97cb8d] dark:bg-[#597E52] rounded-md hover:scale-110 ease-in duration-300" href={i18n.COURSES[selectorCourse].certificate} target="_blank" title="View Course Certificate">{i18n.COURSES.BUTTONS.CERTIFICATE}</a>
        <a className="px-4 py-1 bg-[#97cb8d] dark:bg-[#597E52] rounded-md hover:scale-110 ease-in duration-300" href={i18n.COURSES[selectorCourse].link_course} target="_blank" title="View Course Link">{i18n.COURSES.BUTTONS.COURSE_LINK}</a>
      </div>
    </>
  );
};

export default CursosComponent;
