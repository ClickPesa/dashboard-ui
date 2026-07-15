import * as Popover from "@radix-ui/react-popover";
import { CaretDown } from "@clickpesa/components-library.caret-down";
import "./sidebar-header.sass";

interface ProductType {
  productName: string;
  logo: string;
}

export interface SidebarHeaderProps {
  name: string;
  email: string;
  logo?: string;
  products?: ProductType[];
  handleSwitching: (productName: string) => void;
  mode?: "dark" | "light";
  homeLink?: string;
  Link?: any;
  collapsed?: boolean;
  onExpand?: () => void;
}

export function SidebarHeader({
  name,
  email,
  logo,
  products,
  handleSwitching,
  mode,
  Link,
  homeLink,
  collapsed = false,
  onExpand,
}: SidebarHeaderProps) {
  const logoSrc =
    logo ?? products?.find((p) => p.productName === name)?.logo;

  const logoEl =
    homeLink && Link ? (
      <Link to={homeLink}>
        <img src={logoSrc} alt={`${name}_logo`} />
      </Link>
    ) : (
      <img src={logoSrc} alt={`${name}_logo`} />
    );

  if (collapsed) {
    return (
      <button
        type="button"
        className={`sidebar-header-trigger collapsed ${products ? "hover" : ""} ${mode ?? ""}`}
        title={name}
        onClick={() => {
          if (products) {
            onExpand?.();
          }
        }}
      >
        <div className="wrapper">{logoEl}</div>
      </button>
    );
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={`sidebar-header-trigger ${products ? "hover" : ""} ${mode ?? ""}`}
      >
        <div className="wrapper">
          {logoEl}
          <div className="sidebar-header-text">
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>

        {products && <CaretDown className="caret" />}
      </Popover.Trigger>

      {products && (
        <Popover.Portal>
          <Popover.Content className={`side-bar-content ${mode ?? ""}`}>
            {products.map(({ productName, ...rest }, index) => (
              <Popover.Close
                className="product"
                key={index}
                onClick={() => {
                  handleSwitching(productName);
                }}
                {...rest}
              >
                {productName}
              </Popover.Close>
            ))}
          </Popover.Content>
        </Popover.Portal>
      )}
    </Popover.Root>
  );
}
