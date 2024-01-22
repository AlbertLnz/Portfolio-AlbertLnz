import { useEffect, useState } from "react";
import { getI18N } from "../i18n";

const StudiesComponent = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale })

  const [image, setImage] = useState('/imgs/diceAPI.webp');

  const numOfStudies = 5;
  const [selectorStudies, setSelectorStudies] = useState(5);
  
  const handleIncrementCourse = () => {
    selectorStudies >= 1 && selectorStudies < numOfStudies
      ? setSelectorStudies(selectorStudies + 1)
      : selectorStudies;
  };

  const handleDecrementCourse = () => {
    selectorStudies > 1 ? setSelectorStudies(selectorStudies - 1) : selectorStudies;
  };

  useEffect(() => {
    if(selectorStudies===1) setImage('/imgs/salle.webp')
    if(selectorStudies===2) setImage('/imgs/prat.webp')
    if(selectorStudies===3) setImage('/imgs/prat.webp')
    if(selectorStudies===4) setImage('/imgs/ub.webp')
    if(selectorStudies===5) setImage('/imgs/it.webp')
  }, [selectorStudies])
  

  return (
    <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col h-full">
            <h2 className="text-2xl pl-2 pt-0.5 flex h-fit w-fit">{i18n?.BENTO_TITLES.STUDIES}</h2>
            <ul className="flex flex-col flex-grow text-[10px] my-1">
                <li className="line-clamp-1">{i18n.STUDIES[selectorStudies].name}</li>
                <li className="line-clamp-1">{i18n.STUDIES[selectorStudies].school}</li>
                <li className="line-clamp-1">{i18n.STUDIES[selectorStudies].period}</li>
                <li className="line-clamp-1">{i18n.STUDIES[selectorStudies].location}</li>
            </ul>
            <div className="flex text-[10px] justify-between px-2 py-1">
                <button onClick={handleIncrementCourse} className="bg-[#B0A695] dark:bg-gray-700 px-1 py-0.5 rounded-full">{i18n.STUDIES.BUTTON1}</button>
                <button onClick={handleDecrementCourse} className="bg-[#B0A695] dark:bg-gray-700 px-1 py-0.5 rounded-full">{i18n.STUDIES.BUTTON2}</button>
            </div>
        </div>
        <img className="rounded-xl px-2 object-cover h-full" src={image} alt={i18n.STUDIES[selectorStudies].name} />
    </div>
  )
}

export default StudiesComponent