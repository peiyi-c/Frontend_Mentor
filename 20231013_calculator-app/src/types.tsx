export type Keys = {
  name: string;
  type: string;
  keyCode?: number;
  style?: string;
};

export type KeyType = {
  name: string;
  type: string;
  keyCode?: number;
  style?: string;
  onClick: (name: string, type: string) => void;
};

export type ColorMode = "" | "dark" | "light" | "special";
