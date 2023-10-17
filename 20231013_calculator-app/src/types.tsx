export type KeyType = {
  name: string;
  type: string;
  style?: string;
  onClick?: (name: string, type: string) => void;
};

export type ColorMode = "" | "dark" | "light" | "special";
