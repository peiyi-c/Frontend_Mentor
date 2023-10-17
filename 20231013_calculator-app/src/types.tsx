export type KeyType = {
  name: string;
  type: string;
  keyCode?: number;
  style?: string;
  onClick?: (name: string, type: string) => void;
};

export type ColorMode = "" | "dark" | "light" | "special";
