import { Theme, SxProps } from "@mui/material";

export class SxStyle {
  static create = <
    T extends Record<
      string,
      SxProps<Theme> | ((theme: Theme) => SxProps<Theme>)
    >,
  >(
    styles: T
  ) => styles;
}
