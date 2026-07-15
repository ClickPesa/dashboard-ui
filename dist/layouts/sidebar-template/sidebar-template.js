"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarTemplate = SidebarTemplate;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./sidebar-template.sass");
const sidebar_header_1 = require("../sidebar-header/sidebar-header");
function SidebarTemplate({ sidebarItems, background = "clickpesa", name, products, logo, email, handleSwitching, mode, sidebarOpen, close, homeLink, Link, sidebarFooterItem, collapsed = false, onExpand, selectedProduct, }) {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: `sidebar-backdrop ${sidebarOpen ? "open" : ""}`, onClick: close }), (0, jsx_runtime_1.jsxs)("div", { className: `sidebar-template-container ${background === "clickpesa" ? "clickpesa" : "getpaid"} ${mode !== null && mode !== void 0 ? mode : ""} ${sidebarOpen ? "open" : ""} ${collapsed ? "collapsed" : ""}`, children: [(0, jsx_runtime_1.jsx)(sidebar_header_1.SidebarHeader, { name: name, email: email, handleSwitching: handleSwitching, logo: logo, products: products, mode: mode, Link: Link, homeLink: homeLink, collapsed: collapsed, onExpand: onExpand, selectedProduct: selectedProduct }), (0, jsx_runtime_1.jsxs)("div", { className: "sidebar-template-items", children: [sidebarItems, sidebarFooterItem] })] })] }));
}
