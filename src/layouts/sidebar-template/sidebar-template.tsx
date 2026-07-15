import { ReactNode } from "react";
import "./sidebar-template.sass";
import { SidebarHeader } from "../sidebar-header/sidebar-header";

interface ProductType {
  productName: string;
  logo: string;
  id?: string;
}

export type SidebarTemplateProps = {
  sidebarItems: ReactNode;
  background?: "clickpesa" | "getpaid";
  name: string;
  products?: ProductType[];
  logo?: string;
  email: ReactNode;
  handleSwitching: (product: string) => void;
  mode?: "dark" | "light";
  sidebarOpen: boolean;
  close: () => void;
  homeLink?: string;
  Link?: unknown;
  sidebarFooterItem?: ReactNode;
  collapsed?: boolean;
  onExpand?: () => void;
  selectedProduct?: string;
};

export function SidebarTemplate({
  sidebarItems,
  background = "clickpesa",
  name,
  products,
  logo,
  email,
  handleSwitching,
  mode,
  sidebarOpen,
  close,
  homeLink,
  Link,
  sidebarFooterItem,
  collapsed = false,
  onExpand,
  selectedProduct,
}: SidebarTemplateProps) {
  return (
    <>
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "open" : ""}`}
        onClick={close}
      />
      <div
        className={`sidebar-template-container ${
          background === "clickpesa" ? "clickpesa" : "getpaid"
        } ${mode ?? ""} ${sidebarOpen ? "open" : ""} ${
          collapsed ? "collapsed" : ""
        }`}
      >
        <SidebarHeader
          name={name}
          email={email}
          handleSwitching={handleSwitching}
          logo={logo}
          products={products}
          mode={mode}
          Link={Link}
          homeLink={homeLink}
          collapsed={collapsed}
          onExpand={onExpand}
          selectedProduct={selectedProduct}
        />
        <div className="sidebar-template-items">
          {sidebarItems}
          {sidebarFooterItem}
        </div>
      </div>
    </>
  );
}
