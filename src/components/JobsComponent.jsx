import { getI18N } from "../i18n";

const JobsComponent = ({ currentLocale, id }) => {
    const i18n = getI18N({ currentLocale })
    const jobData = i18n.JOBS[id];

    return (
    <>
        <ul className="mt-1 mb-6 text-center">
            <li className="text-lg font-semibold">{jobData.name}</li>
            <li className="text-sm flex justify-center items-center">{jobData.company}</li>
            <li className="text-xs">{jobData.period}</li>
        </ul>

        <hr text={i18n.JOBS.SEPARATOR} className="overflow-visible p-0 border-t-2 w-[90%] border-double border-black dark:border-white text-center after:content-[attr(text)] after:inline-block after:relative after:top-[-1em] after:text-sm after:px-1 after:bg-[#d1d5db] after:dark:bg-[#171717]"/>

        <div className="flex flex-wrap gap-x-2 text-sm mt-2 justify-center">
            {jobData.abilities.map((ability) => (
                    <p key={ability} className="mt-1.5 text-[10px] bg-sky-300 dark:bg-sky-800 rounded-full px-2">{ability}</p>
            ))}
        </div>
    </>
  )
}

export default JobsComponent