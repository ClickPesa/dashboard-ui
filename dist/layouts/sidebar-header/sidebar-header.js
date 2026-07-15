"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarHeader = SidebarHeader;
const jsx_runtime_1 = require("react/jsx-runtime");
const Popover = __importStar(require("@radix-ui/react-popover"));
const components_library_caret_down_1 = require("@clickpesa/components-library.caret-down");
require("./sidebar-header.sass");
function SidebarHeader({ name, email, logo, products, handleSwitching, mode, Link, homeLink, collapsed = false, onExpand, selectedProduct, }) {
    var _a;
    const logoSrc = logo !== null && logo !== void 0 ? logo : (_a = products === null || products === void 0 ? void 0 : products.find((p) => p.productName === name)) === null || _a === void 0 ? void 0 : _a.logo;
    const logoEl = homeLink && Link ? ((0, jsx_runtime_1.jsx)(Link, { to: homeLink, children: (0, jsx_runtime_1.jsx)("img", { src: logoSrc, alt: `${name}_logo` }) })) : ((0, jsx_runtime_1.jsx)("img", { src: logoSrc, alt: `${name}_logo` }));
    if (collapsed) {
        return ((0, jsx_runtime_1.jsx)("button", { type: "button", className: `sidebar-header-trigger collapsed ${products ? "hover" : ""} ${mode !== null && mode !== void 0 ? mode : ""}`, title: name, onClick: () => {
                if (products) {
                    onExpand === null || onExpand === void 0 ? void 0 : onExpand();
                }
            }, children: (0, jsx_runtime_1.jsx)("div", { className: "wrapper", children: logoEl }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(Popover.Root, { children: [(0, jsx_runtime_1.jsxs)(Popover.Trigger, { className: `sidebar-header-trigger ${products ? "hover" : ""} ${mode !== null && mode !== void 0 ? mode : ""}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "wrapper", children: [logoEl, (0, jsx_runtime_1.jsxs)("div", { className: "sidebar-header-text", children: [(0, jsx_runtime_1.jsx)("h3", { children: name }), (0, jsx_runtime_1.jsx)("p", { children: email })] })] }), products && (0, jsx_runtime_1.jsx)(components_library_caret_down_1.CaretDown, { className: "caret" })] }), products && ((0, jsx_runtime_1.jsx)(Popover.Portal, { children: (0, jsx_runtime_1.jsx)(Popover.Content, { className: `side-bar-content ${mode !== null && mode !== void 0 ? mode : ""}`, children: products.map(({ productName, id, ...rest }, index) => {
                        const value = id || productName;
                        const isActive = selectedProduct
                            ? selectedProduct === id || selectedProduct === productName
                            : false;
                        return ((0, jsx_runtime_1.jsx)(Popover.Close, { className: `product ${isActive ? "active" : ""}`, onClick: () => {
                                handleSwitching(value);
                            }, ...rest, children: productName }, index));
                    }) }) }))] }));
}
