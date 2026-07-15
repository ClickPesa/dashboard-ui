import { ReactNode, useEffect, useState } from "react";
import { TopBar } from "@clickpesa/components-library.top-bar";
import { Menu } from "@clickpesa/components-library.icons.menu";
import { IconButton } from "@clickpesa/components-library.icon-button";
import { Footer } from "@clickpesa/components-library.footer";
import { useWindowSize } from "react-use";
import { SidebarTemplate } from "../sidebar-template/sidebar-template";
import {
  SidebarMenuItem,
  SidebarMenuItemProps,
} from "../sidebar-menu-item/sidebar-menu-item";
import "./clickpesa-layout.sass";

const SIDEBAR_EXPANDED_WIDTH = 300;
const SIDEBAR_COLLAPSED_WIDTH = 72;
const DEFAULT_SIDEBAR_COLLAPSED_STORAGE_KEY = "sidebar-collapsed";

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

function PanelLeftIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      {collapsed ? (
        <path d="m14 9 3 3-3 3" />
      ) : (
        <path d="m15 15-3-3 3-3" />
      )}
    </svg>
  );
}

function SettingsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function readCollapsedPreference(storageKey: string): boolean {
  try {
    return localStorage.getItem(storageKey) === "true";
  } catch {
    return false;
  }
}

export function ClickpesaLayout({
  products,
  productLogo,
  productName = "",
  email,
  onProductChange,
  children,
  mode,
  preferences_categories,
  magicBellUserKey,
  magicbellApiKey,
  magicbellUserEmail,
  magicbellUserExternalId,
  menuItems,
  menu_has_icon,
  onLogout,
  onNotificationClick,
  onModeChange,
  darkModeSwitcher,
  letter = "",
  privacyPolicyUrl,
  termsAndConditionsUrl,
  sidebarMenuItems,
  Link,
  full_name = "",
  homeLink,
  sidebarSettingsLink,
  isSidebardSettingsLinkActive,
  customActions,
  showNotification = true,
  sidebarCollapsedStorageKey = DEFAULT_SIDEBAR_COLLAPSED_STORAGE_KEY,
}: ClickpesaLayoutProps) {
  const { width } = useWindowSize();
  const isDesktop = width > 767;
  const [theme, setMode] = useState(mode);
  const [name, setName] = useState(
    productName ? productName : products ? products[0].productName : ""
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() =>
    readCollapsedPreference(sidebarCollapsedStorageKey)
  );

  useEffect(() => {
    setMode(mode);
  }, [mode]);

  useEffect(() => {
    if (productName) {
      setName(productName);
    }
  }, [productName]);

  const setCollapsed = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
    try {
      localStorage.setItem(sidebarCollapsedStorageKey, String(collapsed));
    } catch {
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

  const renderMenuItems = (items: SidebarMenu[]) =>
    items.map((item, index) => (
      <SidebarMenuItem
        key={index}
        {...item}
        mode={theme}
        handleClick={() => setSidebarOpen(false)}
        Link={Link}
        closeSidebar={() => setSidebarOpen(false)}
        collapsed={desktopCollapsed}
        onExpandSidebar={expandSidebar}
        platform={
          name.toLowerCase().includes("getpaid") ? "getpaid" : "clickpesa"
        }
      />
    ));

  return (
    <div
      className="clickpesa-layout"
      data-sidebar-collapsed={desktopCollapsed ? "true" : "false"}
      style={{
        background: theme === "dark" ? "#1E272E" : "#F2F3F8",
        minHeight: "100vh",
      }}
      data-testid="clickpesa-layout"
    >
      <SidebarTemplate
        sidebarOpen={sidebarOpen}
        close={() => setSidebarOpen(false)}
        collapsed={desktopCollapsed}
        onExpand={expandSidebar}
        sidebarItems={
          <>
            {sidebarMenuItems.length > 0 && (
              <ul
                style={{
                  listStyle: "none",
                  width: "100%",
                }}
              >
                {sidebarMenuItems.map((group, index) => (
                  <li style={{ marginBottom: "1rem" }} key={index}>
                    {group?.groupName && !desktopCollapsed && (
                      <h4
                        style={{
                          padding: "4px 16px",
                          fontSize: "12px",
                          fontWeight: 450,
                          color:
                            theme === "dark" ||
                            name.toLowerCase().includes("getpaid")
                              ? "rgba(255, 255, 255, .65)"
                              : "black",
                        }}
                      >
                        {group.groupName?.toUpperCase()}
                      </h4>
                    )}
                    {group.items.length > 0 && (
                      <ul>{renderMenuItems(group.items)}</ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </>
        }
        products={products}
        name={name}
        handleSwitching={(nextName) => {
          setName(nextName);
          onProductChange?.(nextName);
        }}
        Link={Link}
        homeLink={homeLink}
        email={full_name ? full_name : email}
        logo={productLogo}
        mode={theme}
        background={
          name.toLowerCase().includes("getpaid") ? "getpaid" : "clickpesa"
        }
        sidebarFooterItem={
          sidebarSettingsLink ? (
            <ul>
              <SidebarMenuItem
                iconLeft={<SettingsIcon size={18} />}
                mode={theme}
                reactRouterLink={{
                  to: sidebarSettingsLink,
                }}
                activeLinks={[sidebarSettingsLink]}
                isActiveParent={isSidebardSettingsLinkActive}
                sidebarMenuItemTitle="Settings"
                handleClick={() => setSidebarOpen(false)}
                Link={Link}
                closeSidebar={() => setSidebarOpen(false)}
                collapsed={desktopCollapsed}
                onExpandSidebar={expandSidebar}
                platform={
                  name.toLowerCase().includes("getpaid")
                    ? "getpaid"
                    : "clickpesa"
                }
              />
            </ul>
          ) : undefined
        }
      />
      <TopBar
        Link={Link}
        onlyActions
        customActions={customActions}
        preferences_categories={preferences_categories}
        magicBellUserKey={magicBellUserKey}
        magicbellApiKey={magicbellApiKey}
        magicbellUserEmail={magicbellUserEmail}
        magicbellUserExternalId={magicbellUserExternalId}
        menuItems={menuItems}
        menu_has_icon={menu_has_icon}
        mode={theme}
        onLogout={onLogout}
        onNotificationClick={onNotificationClick}
        darkModeSwitcher={darkModeSwitcher}
        onModeChange={(nextMode: "dark" | "light" | undefined) => {
          onModeChange?.(nextMode);
          setMode(nextMode);
        }}
        letter={letter}
        fullName={full_name}
        platform={
          name.toLowerCase().includes("getpaid") ? "getpaid" : "clickpesa"
        }
        shouldShowPreferencesSettings
        email={email}
        showNotification={showNotification}
      >
        <div>
          {!isDesktop ? (
            <IconButton
              style={{
                height: "40px",
              }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              mode={theme}
            >
              <Menu
                style={{
                  color: theme === "dark" ? "white" : "black",
                }}
              />
            </IconButton>
          ) : (
            <IconButton
              style={{
                height: "40px",
              }}
              onClick={() => setCollapsed(!sidebarCollapsed)}
              mode={theme}
              aria-label={
                sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <span
                style={{
                  color: theme === "dark" ? "white" : "black",
                  display: "flex",
                }}
              >
                <PanelLeftIcon collapsed={sidebarCollapsed} />
              </span>
            </IconButton>
          )}
        </div>
      </TopBar>
      <main
        style={{
          position: "relative",
          paddingTop: "76px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
          marginLeft: sidebarWidth,
          width: isDesktop ? `calc(100% - ${sidebarWidth}px)` : "100%",
          transition: "margin-left .25s, width .25s",
        }}
      >
        <div
          style={{
            padding: isDesktop ? "0 2rem" : "0 1.5rem",
          }}
        >
          {children}
        </div>
        <Footer
          privacyPolicyUrl={privacyPolicyUrl}
          termsAndConditionsUrl={termsAndConditionsUrl}
          product="clickpesa"
          productName={
            name.toLowerCase().includes("getpaid") ? "GetPaid" : "ClickPesa"
          }
          mode={theme}
        />
      </main>
    </div>
  );
}
