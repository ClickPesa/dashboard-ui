import { ReactNode } from "react";
import { SidebarMenuItemProps } from "../sidebar-menu-item/sidebar-menu-item";
import "./clickpesa-layout.sass";
interface ProductType {
    productName: string;
    logo: string;
}
export type SidebarMenu = SidebarMenuItemProps;
interface PreferenceCategories {
    [key: string]: {
        label: string;
        description: string;
    };
}
export interface UserProfilePopoverItems {
    iconLeft?: ReactNode;
    title: string;
    iconRight?: ReactNode;
    to: string;
}
export type ClickpesaLayoutProps = {
    children: ReactNode;
    products?: ProductType[];
    productName?: string;
    productLogo?: string;
    onProductChange?: (name: string) => void;
    email: string;
    letter?: string;
    menuItems: UserProfilePopoverItems[];
    preferences_categories: PreferenceCategories;
    onNotificationClick: (data: unknown) => void;
    onLogout: () => void;
    darkModeSwitcher?: boolean;
    mode?: "dark" | "light";
    onModeChange?: (mode?: "dark" | "light") => void;
    menu_has_icon?: boolean;
    magicbellApiKey: string;
    magicbellUserExternalId?: string;
    magicbellUserEmail?: string;
    magicBellUserKey: string;
    privacyPolicyUrl: string;
    termsAndConditionsUrl: string;
    sidebarMenuItems: {
        groupName?: string;
        items: SidebarMenu[];
    }[];
    Link: unknown;
    full_name?: string;
    homeLink?: string;
    sidebarSettingsLink?: string;
    isSidebardSettingsLinkActive?: boolean;
    customActions?: ReactNode;
    showNotification?: boolean;
    /** localStorage key for desktop collapse preference */
    sidebarCollapsedStorageKey?: string;
};
export declare function ClickpesaLayout({ products, productLogo, productName, email, onProductChange, children, mode, preferences_categories, magicBellUserKey, magicbellApiKey, magicbellUserEmail, magicbellUserExternalId, menuItems, menu_has_icon, onLogout, onNotificationClick, onModeChange, darkModeSwitcher, letter, privacyPolicyUrl, termsAndConditionsUrl, sidebarMenuItems, Link, full_name, homeLink, sidebarSettingsLink, isSidebardSettingsLinkActive, customActions, showNotification, sidebarCollapsedStorageKey, }: ClickpesaLayoutProps): import("react").JSX.Element;
export {};
