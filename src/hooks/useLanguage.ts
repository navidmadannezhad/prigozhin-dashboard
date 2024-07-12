import { useEffect, useState } from "react";
import * as languageConfig from "../../languageConfig";
import { LanguageConfigType, LanguageType } from "@models/models";

const useLanguage = () => {
    const [activeLocale, setActiveLocale] = useState<LanguageType>(languageConfig.defaultActiveLocale);
    
    const {
        enabled,
        locales,
        path
    }: any = languageConfig;

    const changeLocale = (locale: LanguageType): void => {

    }

    useEffect(() => {
        const storedLocale: string | null = localStorage.getItem("prigozhinLocale");
        if(storedLocale){
            setActiveLocale(storedLocale);
        }
    }, [])

    return {
        enabled,
        activeLocale,
        locales,
        path
    };
}

export default useLanguage;