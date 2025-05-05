import { DrawerState } from "@/stores";

export const getStorageOpenDrawers = (): Record<string, DrawerState> => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const localDrawersString = localStorage.getItem("openDrawers");
    if (!localDrawersString) {
      throw new Error("openDrawers is not defined");
    }

    const parsedDrawers = JSON.parse(localDrawersString);
    if (
      !parsedDrawers ||
      typeof parsedDrawers !== "object" ||
      Array.isArray(parsedDrawers)
    ) {
      throw new Error("Invalid drawers object");
    }

    return parsedDrawers;
  } catch {
    localStorage.removeItem("openDrawers");

    return {};
  }
};
