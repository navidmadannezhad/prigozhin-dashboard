import IRANYekanXVF from "@public/fonts/IRANYekanX/variable/IRANYekanXVF.woff";

import IRANYekanXUltraThin from "@public/fonts/IRANYekanX/normal/IRANYekanX-UltraLight.woff";
import IRANYekanXThin from "@public/fonts/IRANYekanX/normal/IRANYekanX-Thin.woff"
import IRANYekanXLight from "@public/fonts/IRANYekanX/normal/IRANYekanX-Light.woff"
import IRANYekanXRegular from "@public/fonts/IRANYekanX/normal/IRANYekanX-Regular.woff"
import IRANYekanXMedium from "@public/fonts/IRANYekanX/normal/IRANYekanX-Medium.woff"
import IRANYekanXDemiBold from "@public/fonts/IRANYekanX/normal/IRANYekanX-DemiBold.woff"
import IRANYekanXBold from "@public/fonts/IRANYekanX/normal/IRANYekanX-Bold.woff"
import IRANYekanXExtraBold from "@public/fonts/IRANYekanX/normal/IRANYekanX-ExtraBold.woff"
import IRANYekanXBlack from "@public/fonts/IRANYekanX/normal/IRANYekanX-Black.woff"
import IRANYekanXExtraBlack from "@public/fonts/IRANYekanX/normal/IRANYekanX-ExtraBlack.woff"

import type {} from '@mui/x-data-grid/themeAugmentation';
import { ThemeOptions } from "@mui/material";
import { lightPalette } from "./palette";

const commonTheme: ThemeOptions = {
    direction: "rtl",
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'IRANYekanXVF';
                    font-style: normal;
                    src: url(${IRANYekanXVF}) format('woff2');
                    font-weight: 100 1000;
                    font-display: fallback;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXUltraThin}) format('woff');
                    font-weight: 100;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXThin}) format('woff');
                    font-weight: 200;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXLight}) format('woff');
                    font-weight: 300;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXRegular}) format('woff');
                    font-weight: 400;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXMedium}) format('woff');
                    font-weight: 500;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXDemiBold}) format('woff');
                    font-weight: 600;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXBold}) format('woff');
                    font-weight: 700;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXExtraBold}) format('woff');
                    font-weight: 800;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXBlack}) format('woff');
                    font-weight: 900;
                }
                @font-face {
                    font-family: IRANYekanX;
                    src: url(${IRANYekanXExtraBlack}) format('woff');
                    font-weight: 1000;
                }

                * {
                    font-family: IRANYekanX, tahoma;
                    fontSize: 18px;
                }
                @supports (font-variation-settings: normal) {
                    * {
                        font-family: 'IRANYekanXVF', tahoma;
                    }
                }

                /* for mozilla */
                *{
                    scrollbar-color: ${lightPalette.primary.main} ${lightPalette.secondary.main};
                    scrollbar-width: thin;
                }

                /* for chrome */
                ::-webkit-scrollbar {
                  width: 0.5rem;
                }
                ::-webkit-scrollbar-track {
                  background: ${lightPalette.secondary.main};
                  border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background: ${lightPalette.primary.main};
                    border-radius: 10px;
                }

                a{
                    text-decoration: none;
                }
            `,
        },

        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "& .MuiAccordionSummary-content": {
                        margin: "0px"
                    },
                    "&.MuiPaper-root::before":{
                        display: "none"
                    }
                }
            }
        },

        MuiTypography: {
            styleOverrides:{
                root:{
                    fontFamily: "IRANYekanXVF",
                    fontWeight: 400,
                    fontVariationSettings: "'wght' 400",
                }
            }
        },

        MuiButton: {
            styleOverrides:{
                root:{
                    fontFamily: "IRANYekanXVF",
                    fontWeight: 400,
                    fontVariationSettings: "'wght' 400",
                }
            }
        },

        MuiCheckbox:{
            styleOverrides: {
                root: {
                    // color: "red",
                    '&.Mui-checked': {
                    //   color: "blue",
                    },
                }
            }
        },

        MuiDataGrid:{
            styleOverrides:{
                root:{
                    borderRadius: 15,
                    border: `2px solid #EAECF0`,
                    overflow: "hidden",

                    "& .MuiDataGrid-columnHeaders":{
                        backgroundColor: lightPalette.secondary.ultraLight
                    },

                    "& .MuiDataGrid-columnSeparator":{
                        display: "none"
                    },
                }
            }
        }
    }
}

export default commonTheme;