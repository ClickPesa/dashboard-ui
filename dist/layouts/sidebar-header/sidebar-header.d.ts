import "./sidebar-header.sass";
interface ProductType {
    productName: string;
    logo: string;
}
export interface SidebarHeaderProps {
    name: string;
    email: string;
    logo?: string;
    products?: ProductType[];
    handleSwitching: (productName: string) => void;
    mode?: "dark" | "light";
    homeLink?: string;
    Link?: any;
    collapsed?: boolean;
    onExpand?: () => void;
}
export declare function SidebarHeader({ name, email, logo, products, handleSwitching, mode, Link, homeLink, collapsed, onExpand, }: SidebarHeaderProps): import("react").JSX.Element;
export {};
