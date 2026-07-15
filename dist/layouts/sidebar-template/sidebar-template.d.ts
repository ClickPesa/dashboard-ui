import { ReactNode } from "react";
import "./sidebar-template.sass";
interface ProductType {
    productName: string;
    logo: string;
}
export type SidebarTemplateProps = {
    sidebarItems: ReactNode;
    background?: "clickpesa" | "getpaid";
    name: string;
    products?: ProductType[];
    logo?: string;
    email: string;
    handleSwitching: (productName: string) => void;
    mode?: "dark" | "light";
    sidebarOpen: boolean;
    close: () => void;
    homeLink?: string;
    Link?: unknown;
    sidebarFooterItem?: ReactNode;
    collapsed?: boolean;
    onExpand?: () => void;
};
export declare function SidebarTemplate({ sidebarItems, background, name, products, logo, email, handleSwitching, mode, sidebarOpen, close, homeLink, Link, sidebarFooterItem, collapsed, onExpand, }: SidebarTemplateProps): import("react").JSX.Element;
export {};
