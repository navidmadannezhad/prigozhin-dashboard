import type {} from '@mui/x-data-grid/themeAugmentation';

const getCommonTheme = (palette: any) => ({
    direction: "rtl",
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                *{
                    transition-duration: 0.2s;
                    transition-property: background-color, color, box-shadow, border;
                }

                /* for mozilla */
                *{
                    scrollbar-color: ${palette.primary.main} ${palette.secondary.main};
                    scrollbar-width: thin;
                }

                /* for chrome */
                ::-webkit-scrollbar {
                width: 0.5rem;
                }
                ::-webkit-scrollbar-track {
                background: ${palette.secondary.main};
                border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background: ${palette.primary.main};
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
                    backgroundColor: palette.secondary.ultraLight,
                    backgroundImage: 'none',
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
                    color: palette.secondary.main
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
                        backgroundColor: palette.secondary.ultraLight
                    },

                    "& .MuiDataGrid-columnSeparator":{
                        display: "none"
                    },
                }
            }
        }
    }
})

export default getCommonTheme;