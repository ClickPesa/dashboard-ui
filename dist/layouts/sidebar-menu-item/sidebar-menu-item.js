"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenuItem = SidebarMenuItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const components_library_caret_down_1 = require("@clickpesa/components-library.caret-down");
require("./sidebar-menu-item.sass");
function SidebarMenuItem({ iconLeft, sidebarMenuItemTitle, handleClick, isActiveParent, sidebarMenuItemChildren, reactRouterLink, mode, platform = "clickpesa", Link, closeSidebar, activeLinks, defaultOpen = false, collapsed = false, onExpandSidebar, ...restParent }) {
    const [open, setOpen] = (0, react_1.useState)(defaultOpen);
    const location = (0, react_router_dom_1.useLocation)();
    const path = location.pathname.split("/")[1];
    (0, react_1.useEffect)(() => {
        if ((activeLinks === null || activeLinks === void 0 ? void 0 : activeLinks.length) && !(activeLinks === null || activeLinks === void 0 ? void 0 : activeLinks.includes(path))) {
            setOpen(false);
        }
    }, [path, activeLinks]);
    (0, react_1.useEffect)(() => {
        if (collapsed) {
            setOpen(false);
        }
    }, [collapsed]);
    const onParentClick = (e) => {
        if (sidebarMenuItemChildren) {
            e.preventDefault();
            e.stopPropagation();
            if (collapsed) {
                onExpandSidebar === null || onExpandSidebar === void 0 ? void 0 : onExpandSidebar();
                setOpen(true);
                return;
            }
            setOpen(!open);
            return;
        }
        handleClick === null || handleClick === void 0 ? void 0 : handleClick();
    };
    const content = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "wrapper", children: [iconLeft, (0, jsx_runtime_1.jsx)("span", { className: "sidebar-menu-item-title", children: sidebarMenuItemTitle })] }), sidebarMenuItemChildren && ((0, jsx_runtime_1.jsx)(components_library_caret_down_1.CaretDown, { className: "sidebar-menu-item-caret", style: {
                    transition: ".25s",
                    transform: open ? "rotate(180deg)" : "rotate(0)",
                } }))] }));
    return ((0, jsx_runtime_1.jsxs)("li", { className: `sidebar-menu-item-container ${sidebarMenuItemChildren && open && !collapsed ? "open" : ""} ${!sidebarMenuItemChildren ? "no_children" : ""} ${mode !== null && mode !== void 0 ? mode : ""} ${platform} ${collapsed ? "collapsed" : ""}`, title: collapsed ? sidebarMenuItemTitle : undefined, children: [reactRouterLink ? ((0, jsx_runtime_1.jsx)(Link, { className: `item ${isActiveParent ? "active" : ""}`, onClick: onParentClick, ...reactRouterLink, children: content })) : ((0, jsx_runtime_1.jsx)("a", { className: `item ${isActiveParent ? "active" : ""}`, onClick: onParentClick, ...restParent, children: content })), !collapsed && ((0, jsx_runtime_1.jsx)("div", { className: "children_container", children: sidebarMenuItemChildren === null || sidebarMenuItemChildren === void 0 ? void 0 : sidebarMenuItemChildren.map(({ iconLeftChild, titleChild, isActiveChild, ...restChild }, index) => ((0, jsx_runtime_1.jsxs)(Link, { className: `child ${isActiveChild ? "active" : ""}`, onClick: (e) => {
                        var _a;
                        closeSidebar === null || closeSidebar === void 0 ? void 0 : closeSidebar();
                        (_a = restChild.onClick) === null || _a === void 0 ? void 0 : _a.call(restChild, e);
                    }, ...restChild, children: [iconLeftChild, titleChild] }, index))) }))] }));
}
