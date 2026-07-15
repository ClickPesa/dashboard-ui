"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickpesaLayout = ClickpesaLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_library_top_bar_1 = require("@clickpesa/components-library.top-bar");
const components_library_icons_menu_1 = require("@clickpesa/components-library.icons.menu");
const components_library_icon_button_1 = require("@clickpesa/components-library.icon-button");
const components_library_footer_1 = require("@clickpesa/components-library.footer");
const react_use_1 = require("react-use");
const sidebar_template_1 = require("../sidebar-template/sidebar-template");
const sidebar_menu_item_1 = require("../sidebar-menu-item/sidebar-menu-item");
require("./clickpesa-layout.sass");
const SIDEBAR_EXPANDED_WIDTH = 300;
const SIDEBAR_COLLAPSED_WIDTH = 72;
const DEFAULT_SIDEBAR_COLLAPSED_STORAGE_KEY = "sidebar-collapsed";
function PanelLeftIcon({ collapsed }) {
    return ((0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: [(0, jsx_runtime_1.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 3v18" }), collapsed ? ((0, jsx_runtime_1.jsx)("path", { d: "m14 9 3 3-3 3" })) : ((0, jsx_runtime_1.jsx)("path", { d: "m15 15-3-3 3-3" }))] }));
}
function SettingsIcon({ size = 18 }) {
    return ((0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "3" })] }));
}
function readCollapsedPreference(storageKey) {
    try {
        return localStorage.getItem(storageKey) === "true";
    }
    catch {
        return false;
    }
}
function ClickpesaLayout({ products, productLogo, productName = "", email, onProductChange, children, mode, preferences_categories, magicBellUserKey, magicbellApiKey, magicbellUserEmail, magicbellUserExternalId, menuItems, menu_has_icon, onLogout, onNotificationClick, onModeChange, darkModeSwitcher, letter = "", privacyPolicyUrl, termsAndConditionsUrl, sidebarMenuItems, Link, full_name = "", homeLink, sidebarSettingsLink, isSidebardSettingsLinkActive, customActions, showNotification = true, sidebarCollapsedStorageKey = DEFAULT_SIDEBAR_COLLAPSED_STORAGE_KEY, }) {
    const { width } = (0, react_use_1.useWindowSize)();
    const isDesktop = width > 767;
    const [theme, setMode] = (0, react_1.useState)(mode);
    const [name, setName] = (0, react_1.useState)(productName ? productName : products ? products[0].productName : "");
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, react_1.useState)(() => readCollapsedPreference(sidebarCollapsedStorageKey));
    (0, react_1.useEffect)(() => {
        setMode(mode);
    }, [mode]);
    (0, react_1.useEffect)(() => {
        if (productName) {
            setName(productName);
        }
    }, [productName]);
    const setCollapsed = (collapsed) => {
        setSidebarCollapsed(collapsed);
        try {
            localStorage.setItem(sidebarCollapsedStorageKey, String(collapsed));
        }
        catch {
            // ignore storage failures
        }
    };
    const desktopCollapsed = isDesktop && sidebarCollapsed;
    const sidebarWidth = !isDesktop
        ? 0
        : desktopCollapsed
            ? SIDEBAR_COLLAPSED_WIDTH
            : SIDEBAR_EXPANDED_WIDTH;
    const expandSidebar = () => setCollapsed(false);
    const renderMenuItems = (items) => items.map((item, index) => ((0, jsx_runtime_1.jsx)(sidebar_menu_item_1.SidebarMenuItem, { ...item, mode: theme, handleClick: () => setSidebarOpen(false), Link: Link, closeSidebar: () => setSidebarOpen(false), collapsed: desktopCollapsed, onExpandSidebar: expandSidebar, platform: name.toLowerCase().includes("getpaid") ? "getpaid" : "clickpesa" }, index)));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "clickpesa-layout", "data-sidebar-collapsed": desktopCollapsed ? "true" : "false", style: {
            background: theme === "dark" ? "#1E272E" : "#F2F3F8",
            minHeight: "100vh",
        }, "data-testid": "clickpesa-layout", children: [(0, jsx_runtime_1.jsx)(sidebar_template_1.SidebarTemplate, { sidebarOpen: sidebarOpen, close: () => setSidebarOpen(false), collapsed: desktopCollapsed, onExpand: expandSidebar, sidebarItems: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: sidebarMenuItems.length > 0 && ((0, jsx_runtime_1.jsx)("ul", { style: {
                            listStyle: "none",
                            width: "100%",
                        }, children: sidebarMenuItems.map((group, index) => {
                            var _a;
                            return ((0, jsx_runtime_1.jsxs)("li", { style: { marginBottom: "1rem" }, children: [(group === null || group === void 0 ? void 0 : group.groupName) && !desktopCollapsed && ((0, jsx_runtime_1.jsx)("h4", { style: {
                                            padding: "4px 16px",
                                            fontSize: "12px",
                                            fontWeight: 450,
                                            color: theme === "dark" ||
                                                name.toLowerCase().includes("getpaid")
                                                ? "rgba(255, 255, 255, .65)"
                                                : "black",
                                        }, children: (_a = group.groupName) === null || _a === void 0 ? void 0 : _a.toUpperCase() })), group.items.length > 0 && ((0, jsx_runtime_1.jsx)("ul", { children: renderMenuItems(group.items) }))] }, index));
                        }) })) }), products: products, name: name, handleSwitching: (nextName) => {
                    setName(nextName);
                    onProductChange === null || onProductChange === void 0 ? void 0 : onProductChange(nextName);
                }, Link: Link, homeLink: homeLink, email: full_name ? full_name : email, logo: productLogo, mode: theme, background: name.toLowerCase().includes("getpaid") ? "getpaid" : "clickpesa", sidebarFooterItem: sidebarSettingsLink ? ((0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(sidebar_menu_item_1.SidebarMenuItem, { iconLeft: (0, jsx_runtime_1.jsx)(SettingsIcon, { size: 18 }), mode: theme, reactRouterLink: {
                            to: sidebarSettingsLink,
                        }, activeLinks: [sidebarSettingsLink], isActiveParent: isSidebardSettingsLinkActive, sidebarMenuItemTitle: "Settings", handleClick: () => setSidebarOpen(false), Link: Link, closeSidebar: () => setSidebarOpen(false), collapsed: desktopCollapsed, onExpandSidebar: expandSidebar, platform: name.toLowerCase().includes("getpaid")
                            ? "getpaid"
                            : "clickpesa" }) })) : undefined }), (0, jsx_runtime_1.jsx)(components_library_top_bar_1.TopBar, { Link: Link, onlyActions: true, customActions: customActions, preferences_categories: preferences_categories, magicBellUserKey: magicBellUserKey, magicbellApiKey: magicbellApiKey, magicbellUserEmail: magicbellUserEmail, magicbellUserExternalId: magicbellUserExternalId, menuItems: menuItems, menu_has_icon: menu_has_icon, mode: theme, onLogout: onLogout, onNotificationClick: onNotificationClick, darkModeSwitcher: darkModeSwitcher, onModeChange: (nextMode) => {
                    onModeChange === null || onModeChange === void 0 ? void 0 : onModeChange(nextMode);
                    setMode(nextMode);
                }, letter: letter, fullName: full_name, platform: name.toLowerCase().includes("getpaid") ? "getpaid" : "clickpesa", shouldShowPreferencesSettings: true, email: email, showNotification: showNotification, children: (0, jsx_runtime_1.jsx)("div", { children: !isDesktop ? ((0, jsx_runtime_1.jsx)(components_library_icon_button_1.IconButton, { style: {
                            height: "40px",
                        }, onClick: () => setSidebarOpen(!sidebarOpen), mode: theme, children: (0, jsx_runtime_1.jsx)(components_library_icons_menu_1.Menu, { style: {
                                color: theme === "dark" ? "white" : "black",
                            } }) })) : ((0, jsx_runtime_1.jsx)(components_library_icon_button_1.IconButton, { style: {
                            height: "40px",
                        }, onClick: () => setCollapsed(!sidebarCollapsed), mode: theme, "aria-label": sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar", title: sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar", children: (0, jsx_runtime_1.jsx)("span", { style: {
                                color: theme === "dark" ? "white" : "black",
                                display: "flex",
                            }, children: (0, jsx_runtime_1.jsx)(PanelLeftIcon, { collapsed: sidebarCollapsed }) }) })) }) }), (0, jsx_runtime_1.jsxs)("main", { style: {
                    position: "relative",
                    paddingTop: "76px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "100vh",
                    marginLeft: sidebarWidth,
                    width: isDesktop ? `calc(100% - ${sidebarWidth}px)` : "100%",
                    transition: "margin-left .25s, width .25s",
                }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            padding: isDesktop ? "0 2rem" : "0 1.5rem",
                        }, children: children }), (0, jsx_runtime_1.jsx)(components_library_footer_1.Footer, { privacyPolicyUrl: privacyPolicyUrl, termsAndConditionsUrl: termsAndConditionsUrl, product: "clickpesa", productName: name.toLowerCase().includes("getpaid") ? "GetPaid" : "ClickPesa", mode: theme })] })] }));
}
