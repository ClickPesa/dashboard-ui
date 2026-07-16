# @clickpesa/dashboard-ui

Shared ClickPesa dashboard UI components (GitHub-hosted replacement for Bit layout pieces).

## Install

```json
"@clickpesa/dashboard-ui": "github:ClickPesa/dashboard-ui#v0.1.2"
```

Peer packages still required until those leave Bit: `top-bar`, `footer`, `icon-button`, `icons.menu`, `caret-down`, plus `@radix-ui/react-popover`, `react-use`, `react-router-dom`, and `antd` (for `AccessControlSwitchRow`).

Consumer apps must be able to compile `.sass` (e.g. Vite + `sass`).

## Usage

```tsx
import {
  ClickpesaLayout,
  AccessControlSwitchRow,
} from "@clickpesa/dashboard-ui";

<ClickpesaLayout
  sidebarCollapsedStorageKey="admin-sidebar-collapsed"
  {/* ... */}
/>

<AccessControlSwitchRow
  mode="light"
  title="Dashboard login"
  description="When on, the merchant can sign in."
  status={<StatusTag name="Enabled" color="green" mode="light" />}
  checked={loginEnabled}
  onChange={setLoginEnabled}
/>
```

## Develop

```sh
yarn
# resolve peers from a sibling dashboard install while iterating:
NODE_PATH=../admin-dashboard-v3/node_modules yarn build
```

Tag releases after committing `dist/`:

```sh
yarn build
git add -A && git commit -m "release: v0.1.0"
git tag v0.1.0
git push origin main --tags
```
