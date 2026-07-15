import { ReactNode } from "react";
import "./sidebar-template.sass";
interface ProductType {
    productName: string;
    logo: string;
    id?: string;
}
export type SidebarTemplateProps = {
    sidebarItems: ReactNode;
    background?: "clickpesa" | "getpaid";
    name: string;
    products?: ProductType[];
    logo?: string;
    email: ReactNode;
    handleSwitching: (product: string) => void;
    mode?: "dark" | "light";
    sidebarOpen: boolean;
    close: () => void;
    homeLink?: string;
    Link?: unknown;
    sidebarFooterItem?: ReactNode;
    collapsed?: boolean;
    onExpand?: () => void;
    selectedProduct?: string;
};
export declare function SidebarTemplate({ sidebarItems, background, name, products, logo, email, handleSwitching, mode, sidebarOpen, close, homeLink, Link, sidebarFooterItem, collapsed, onExpand, selectedProduct, }: SidebarTemplateProps): import("react").JSX.Element;
export {};
