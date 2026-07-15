import { ReactNode, DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { LinkProps } from "react-router-dom";
import "./sidebar-menu-item.sass";
export interface SidebarMenuItemChild extends LinkProps {
    iconLeftChild?: ReactNode;
    titleChild: string;
    isActiveChild?: boolean;
}
export interface SidebarMenuItemProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    iconLeft: ReactNode;
    sidebarMenuItemTitle: string;
    handleClick?: () => void;
    isActiveParent?: boolean;
    sidebarMenuItemChildren?: SidebarMenuItemChild[];
    reactRouterLink?: LinkProps;
    mode?: "dark" | "light";
    platform?: "clickpesa" | "getpaid";
    activeLinks?: string[];
    Link: any;
    closeSidebar?: () => void;
    defaultOpen?: boolean;
    collapsed?: boolean;
    onExpandSidebar?: () => void;
}
export declare function SidebarMenuItem({ iconLeft, sidebarMenuItemTitle, handleClick, isActiveParent, sidebarMenuItemChildren, reactRouterLink, mode, platform, Link, closeSidebar, activeLinks, defaultOpen, collapsed, onExpandSidebar, ...restParent }: SidebarMenuItemProps): import("react").JSX.Element;
