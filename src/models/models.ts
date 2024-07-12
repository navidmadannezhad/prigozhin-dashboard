import { ReactNode } from "react";

export interface LanguageType {
    name: string;
    code: string;
}

export interface LanguageConfigType {
    enabled: boolean;
    defaultActiveLocale: LanguageType;
    locales: LanguageType[];
    path: string;
}

export interface HeaderOption{
    name: string;
    link: any;
    icon: ReactNode;
    subOptions?: Partial<HeaderOption>[];
    component?: any;
    isAuthRoute: boolean;
    layout?: any;
    activeRoute: boolean;
    presentInMenu: boolean;
}

export type Action = "create" | "update" | "delete" | "access";

export interface ActionConfig {
    action: string;
    color: "primary" | "secondary" | "error" | "success"
}

export interface Book{
    id?: number;
    title: string;
    price: number | string;
    inventory: boolean;
}

export const enum RatioMode{
    ASC="ascending",
    DESC="descending"
}

export interface SelectOption{
    label: string | undefined;
    value: string | number | undefined;
}