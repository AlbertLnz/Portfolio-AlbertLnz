import { useState } from "react";
import ArrowLeft from "../icons/ArrowLeft"
import ArrowRight from "../icons/ArrowRight"
import { getI18N } from "../i18n";


const ReferencesComponent = ({ currentLocale }) => {
    
  const i18n = getI18N({ currentLocale })
  
  const numOfReferences = 2;
  const [selectorReference, setSelectorReference] = useState(1);
  
  const handleIncrementCourse = () => {
    selectorReference >= 1 && selectorReference < numOfReferences
      ? setSelectorReference(selectorReference + 1)
      : selectorReference;
  };

  const handleDecrementCourse = () => {
    selectorReference > 1 ? setSelectorReference(selectorReference - 1) : selectorReference;
  };

  return (
    <div className="flex w-full h-full">
    <ArrowLeft className="size-4 dark:stroke-white h-full hover:cursor-pointer" click={handleDecrementCourse}/>
    <section className="flex mx-4 gap-x-2">
        <a className="size-16" target="_blank" href={i18n.REFERENCES[selectorReference].author_linkedin} title="LinkedIn User">
            <img className="rounded-full" src={i18n.REFERENCES[selectorReference].author_linkedin_image} alt="Linkedin User Image" />
        </a>
        <div className="w-full">
            <p className="italic text-xs">"{i18n.REFERENCES[selectorReference].message}"</p>
            <p className="text-[8px] text-end">{i18n.REFERENCES[selectorReference].author}</p>
        </div>
    </section>
    <ArrowRight className="size-4 dark:stroke-white h-full hover:cursor-pointer" click={handleIncrementCourse}/>
    </div>
  )
}

export default ReferencesComponent