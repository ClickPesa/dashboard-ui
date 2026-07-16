"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlSwitchRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const switch_1 = __importDefault(require("antd/lib/switch"));
require("./access-control-switch-row.sass");
const AccessControlSwitchRow = ({ title, description, status, checked, onChange, switchDisabled, switchLoading, actions, children, mode, isLast = false, className, }) => {
    const showSwitch = typeof onChange === "function";
    const showActions = Boolean(actions);
    const showRightControls = showSwitch || showActions;
    const rootClassName = [
        "access-control-switch-row",
        mode,
        isLast ? "is-last" : "",
        className !== null && className !== void 0 ? className : "",
    ]
        .filter(Boolean)
        .join(" ");
    return ((0, jsx_runtime_1.jsxs)("div", { className: rootClassName, children: [(0, jsx_runtime_1.jsxs)("div", { className: "access-control-switch-row__grid", children: [(0, jsx_runtime_1.jsx)("p", { className: "access-control-switch-row__title", children: title }), (0, jsx_runtime_1.jsx)("span", { className: "access-control-switch-row__status", children: status }), description ? ((0, jsx_runtime_1.jsx)("p", { className: "access-control-switch-row__description", children: description })) : ((0, jsx_runtime_1.jsx)("span", {})), showRightControls ? ((0, jsx_runtime_1.jsxs)("span", { className: "access-control-switch-row__controls", children: [showSwitch ? ((0, jsx_runtime_1.jsx)(switch_1.default, { checked: !!checked, loading: switchLoading, disabled: switchDisabled, onChange: onChange })) : null, showActions ? actions : null] })) : ((0, jsx_runtime_1.jsx)("span", {}))] }), children ? ((0, jsx_runtime_1.jsx)("div", { className: "access-control-switch-row__children", children: children })) : null] }));
};
exports.AccessControlSwitchRow = AccessControlSwitchRow;
