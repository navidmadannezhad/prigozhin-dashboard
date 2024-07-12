import type { HeaderOption } from "@models/models";
import { DashboardIcon, CommentsIcon } from "@components/Major/Icons";

import DashboardPage from "@components/Templates/DashboardPage";
import Layout from "@components/Templates/Layout";
import LoginPage from "@components/Templates/LoginPage";
import BooksPage from "@components/Templates/BooksPage";
import NewBookPage from "@components/Templates/NewBookPage";

export const headerOptions: HeaderOption[] = [
    {
        name: "داشبورد",
        link: "/",
        icon: <DashboardIcon />,
        component: DashboardPage,
        layout: Layout,
        isAuthRoute: true,
        activeRoute: true,
        presentInMenu: true,
    },
    {
        name: "کتاب",
        link: "/book",
        icon: <CommentsIcon />,
        isAuthRoute: true,
        activeRoute: true,
        presentInMenu: true,
        subOptions: [
            {
                name: "همه کتاب ها",
                link: "/books",
                component: BooksPage,
                layout: Layout,
                isAuthRoute: true,
                activeRoute: true,
                presentInMenu: true,
            },
            {
                name: "کتاب جدید",
                link: "/book/new",
                component: NewBookPage,
                layout: Layout,
                isAuthRoute: true,
                activeRoute: true,
                presentInMenu: true,
            },
        ]
    },
    {
        name: "ورود",
        link: "/login",
        icon: null,
        component: LoginPage,
        layout: null,
        isAuthRoute: false,
        activeRoute: true,
        presentInMenu: false,
    },
]

const generateRouteList = (headerOptions: HeaderOption[]): any => {
    let nonSubOptionRoutes = headerOptions.filter((option) => !option.subOptions);
    let subOptionRoutes: any = [];

    headerOptions.forEach((option) => {
        if(option.subOptions){
            option.subOptions.forEach(subOption => {
                subOptionRoutes.push(subOption);
            })
        }
    })

    return [...nonSubOptionRoutes, ...subOptionRoutes]
}

export const routeOptions = generateRouteList(headerOptions)