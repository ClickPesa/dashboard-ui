import { ReactNode } from "react";
import "./sidebar-header.sass";
interface ProductType {
    productName: string;
    logo: string;
    id?: string;
}
export interface SidebarHeaderProps {
    name: string;
    email: ReactNode;
    logo?: string;
    products?: ProductType[];
    handleSwitching: (product: string) => void;
    mode?: "dark" | "light";
    homeLink?: string;
    Link?: any;
    collapsed?: boolean;
    onExpand?: () => void;
    selectedProduct?: string;
}
export declare function SidebarHeader({ name, email, logo, products, handleSwitching, mode, Link, homeLink, collapsed, onExpand, selectedProduct, }: SidebarHeaderProps): import("react").JSX.Element;
export {};
