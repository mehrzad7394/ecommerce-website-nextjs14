import { create } from "zustand";
import { persist } from "zustand/middleware";
import data from "../data";

type Layout = {
  theme: string;
  drawerOpen: boolean;
};
const initialState: Layout = {
  theme: "system",
  drawerOpen: false,
};
export const layoutStore = create<Layout>()(
  persist(() => initialState, {
    name: "layoutStore",
  })
);

export default function useLayoutService() {
  const { theme, drawerOpen } = layoutStore();
  return {
    theme,
    drawerOpen,
    toggleDrawer: () => {
      layoutStore.setState({
        drawerOpen: !drawerOpen,
      });
    },
    toggleTheme: () => {
      layoutStore.setState({
        theme:
          theme === data.themes.dark ? data.themes.light : data.themes.dark,
      });
    },
  };
}
