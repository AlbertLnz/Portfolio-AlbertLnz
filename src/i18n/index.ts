import english from './en.json'
import espanol from './es.json'
import catala from './ca.json'

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es',
    CATALAN: 'ca',
}

export const getI18N = ({ currentLocale = 'en' }: { currentLocale: string | undefined }) => {
    if(currentLocale === LANGUAGES.ENGLISH) return english
    if(currentLocale === LANGUAGES.SPANISH) return espanol
    if(currentLocale === LANGUAGES.CATALAN) return catala
}