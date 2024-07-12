import { FC } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { LanguageType } from "@models/models";

interface LanguageProviderProps{
    children?: React.ReactNode
}

const LanguageProvider: FC<LanguageProviderProps> = (props) => {
    // const { locales, defaultActiveLocale }: any = languageConfig;
    const router = useRouter();

    // useEffect(() => {
    //     let languageInitiated: boolean = false;

    //     for(let i: number=0; i < locales.length; i++){
    //         if(router.asPath.includes(locales[i].code)){
    //             languageInitiated = true;
    //         }
    //     }

    //     if(!languageInitiated){
    //         // 404 problem because of locale addition!
    //         router.push(`${defaultActiveLocale.code}${router.asPath}`);
    //     }
    // }, [])

    return(
        <>
            {props.children}
        </>
    )
}

export default LanguageProvider;