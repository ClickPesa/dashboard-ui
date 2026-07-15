import {
  ReactNode,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  MouseEvent,
  useState,
  useEffect,
} from "react";
import { LinkProps, useLocation } from "react-router-dom";
import { CaretDown } from "@clickpesa/components-library.caret-down";
import "./sidebar-menu-item.sass";

export interface SidebarMenuItemChild extends LinkProps {
  iconLeftChild?: ReactNode;
  titleChild: string;
  isActiveChild?: boolean;
}

export interface SidebarMenuItemProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
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

export function SidebarMenuItem({
  iconLeft,
  sidebarMenuItemTitle,
  handleClick,
  isActiveParent,
  sidebarMenuItemChildren,
  reactRouterLink,
  mode,
  platform = "clickpesa",
  Link,
  closeSidebar,
  activeLinks,
  defaultOpen = false,
  collapsed = false,
  onExpandSidebar,
  ...restParent
}: SidebarMenuItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    if (activeLinks?.length && !activeLinks?.includes(path)) {
      setOpen(false);
    }
  }, [path, activeLinks]);

  useEffect(() => {
    if (collapsed) {
      setOpen(false);
    }
  }, [collapsed]);

  const onParentClick = (e: MouseEvent) => {
    if (sidebarMenuItemChildren) {
      e.preventDefault();
      e.stopPropagation();
      if (collapsed) {
        onExpandSidebar?.();
        setOpen(true);
        return;
      }
      setOpen(!open);
      return;
    }
    handleClick?.();
  };

  const content = (
    <>
      <div className="wrapper">
        {iconLeft}
        <span className="sidebar-menu-item-title">{sidebarMenuItemTitle}</span>
      </div>
      {sidebarMenuItemChildren && (
        <CaretDown
          className="sidebar-menu-item-caret"
          style={{
            transition: ".25s",
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }}
        />
      )}
    </>
  );

  return (
    <li
      className={`sidebar-menu-item-container ${
        sidebarMenuItemChildren && open && !collapsed ? "open" : ""
      } ${!sidebarMenuItemChildren ? "no_children" : ""} ${mode ?? ""} ${platform} ${
        collapsed ? "collapsed" : ""
      }`}
      title={collapsed ? sidebarMenuItemTitle : undefined}
    >
      {reactRouterLink ? (
        <Link
          className={`item ${isActiveParent ? "active" : ""}`}
          onClick={onParentClick}
          {...reactRouterLink}
        >
          {content}
        </Link>
      ) : (
        <a
          className={`item ${isActiveParent ? "active" : ""}`}
          onClick={onParentClick}
          {...restParent}
        >
          {content}
        </a>
      )}
      {!collapsed && (
        <div className="children_container">
          {sidebarMenuItemChildren?.map(
            (
              { iconLeftChild, titleChild, isActiveChild, ...restChild },
              index
            ) => (
              <Link
                className={`child ${isActiveChild ? "active" : ""}`}
                key={index}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  closeSidebar?.();
                  restChild.onClick?.(e as any);
                }}
                {...restChild}
              >
                {iconLeftChild}
                {titleChild}
              </Link>
            )
          )}
        </div>
      )}
    </li>
  );
}
