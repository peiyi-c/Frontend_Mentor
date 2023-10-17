export type KeyType = {
  name: string;
  type: string;
  style?: string;
  onClick?: () => void;
};

export type ColorMode = "" | "dark" | "light" | "special";
