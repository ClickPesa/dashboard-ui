import { ReactNode } from "react";
import Switch from "antd/lib/switch";
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

export const AccessControlSwitchRow = ({
  title,
  description,
  status,
  checked,
  onChange,
  switchDisabled,
  switchLoading,
  actions,
  children,
  mode,
  isLast = false,
  className,
}: AccessControlSwitchRowProps) => {
  const showSwitch = typeof onChange === "function";
  const showActions = Boolean(actions);
  const showRightControls = showSwitch || showActions;
  const rootClassName = [
    "access-control-switch-row",
    mode,
    isLast ? "is-last" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className="access-control-switch-row__grid">
        <p className="access-control-switch-row__title">{title}</p>
        <span className="access-control-switch-row__status">{status}</span>
        {description ? (
          <p className="access-control-switch-row__description">{description}</p>
        ) : (
          <span />
        )}
        {showRightControls ? (
          <span className="access-control-switch-row__controls">
            {showSwitch ? (
              <Switch
                checked={!!checked}
                loading={switchLoading}
                disabled={switchDisabled}
                onChange={onChange}
              />
            ) : null}
            {showActions ? actions : null}
          </span>
        ) : (
          <span />
        )}
      </div>
      {children ? (
        <div className="access-control-switch-row__children">{children}</div>
      ) : null}
    </div>
  );
};
