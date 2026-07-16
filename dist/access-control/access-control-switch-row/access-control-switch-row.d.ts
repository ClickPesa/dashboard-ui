import { ReactNode } from "react";
import "./access-control-switch-row.sass";
export type AccessControlSwitchRowProps = {
    title: string;
    description?: string;
    /** Single status that matters right now (consumer decides). */
    status?: ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    switchDisabled?: boolean;
    switchLoading?: boolean;
    /** One essential action (e.g. Settings). Multi-action flows belong in a drawer. */
    actions?: ReactNode;
    /** Alerts, copy details, offline numbers, etc. */
    children?: ReactNode;
    mode: "dark" | "light";
    isLast?: boolean;
    className?: string;
};
export declare const AccessControlSwitchRow: ({ title, description, status, checked, onChange, switchDisabled, switchLoading, actions, children, mode, isLast, className, }: AccessControlSwitchRowProps) => import("react").JSX.Element;
