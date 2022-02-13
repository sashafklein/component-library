type PaletteColor = "primary" | "secondary" | "error" | "grey" | "white";

export type Palette = {
  [k in PaletteColor]: {
    main: string;
    light?: string;
    dark?: string;
  };
};

export interface Theme {
  palette: Palette;
}
