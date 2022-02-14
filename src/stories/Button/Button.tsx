import React, { ReactElement } from "react";
import { styled, Button as MuiButton, Theme, Palette } from "@mui/material";

import { isAbsoluteURL } from "../../shared/utils";

type ButtonType = "primary" | "secondary" | "tertiary" | "destructive";

const grey = {
  dark: "#525a68",
  main: "#C1C5C9",
  light: "#F5F5F5",
};

export interface ButtonProps {
  children: ReactElement | string;
  type: ButtonType;
  onClick?: () => void;

  /**
   * If a `to` is supplied, the button becomes a link.
   * - An `a` tag is used if the path is absolute.
   * - If the path is relative, a Link must also be passed.
   * */
  to?: string;

  /** Must be passed if the button contains a relative `to` path. */
  Link?: React.Component;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  disabled?: boolean;

  /** Collapses padding if true. */
  thin?: boolean;
}

/**
 *
 * ### A basic button component.
 *
 * Can operate either with onClick functionality or as a link. Among other props, takes:
 *
 * - A `type` which determines visual.
 * - A `disabled` (default: false) prop, which passes through to MUI button (and determines visual).
 * - An optional `thin` prop (default: false), which collapses padding.
 *
 * Additionally, a button takes either an `onClick` function or a `to` prop. If given a `to` prop which is a relative path, a `Link` component is required as well. If the `to` is absolute, an `a` tag will be rendered with an `href`.
 */
export const Button = (props: ButtonProps): ReactElement => {
  const { type, disabled, children, thin, onClick, Link, to, ...other } = props;
  const variant: "contained" | "outlined" =
    disabled || type !== "tertiary" ? "contained" : "outlined";

  const passedProps = {
    ...other,
    variant,
    href: "",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  if (!disabled) {
    if (onClick) {
      passedProps.onClick = onClick;
    } else if (to) {
      passedProps.href = to;
      if (isAbsoluteURL(to)) {
        passedProps.component = "a";
      } else if (!Link) {
        throw new Error('Relative "to" value given to Button without a Link.');
      } else {
        passedProps.component = Link;
      }
    }
  }

  const colors = (palette: Palette) => {
    const { primary, error } = palette;

    return disabled
      ? { bg: grey.light, text: grey.main, border: "transparent" }
      : {
          primary: { bg: primary.main, text: "white", border: primary.main },
          secondary: { bg: primary.light, text: primary.main, border: "transparent" },
          tertiary: { bg: "white", text: grey.dark, border: grey.dark },
          destructive: { bg: error.light, text: error.main, border: "transparent" },
        }[type];
  };

  const styles = (theme: Theme) => {
    const c = colors(theme.palette);
    return `
      padding: ${thin ? "2px 12px" : "8px 16px"};
      background-color: ${c.bg};
      color: ${c.text};
      border: 1px solid ${c.border};
      border-radius: 8px;
      box-shadow: none;
      cursor: ${disabled ? "not-allowed" : "pointer"};

      /* Invert colors on hover (keep border the same and ignore for disabled) */
      &:hover {
        background-color: ${disabled ? c.bg : c.text};
        color: ${disabled ? c.text : c.bg};
        border: 1px solid ${c.border};
        border-radius: 8px;
        box-shadow: none;
      }
    `;
  };

  const StyledButton = styled(MuiButton)`
    ${({ theme }) => styles(theme)}
  `;

  return <StyledButton {...passedProps}>{children}</StyledButton>;
};

Button.defaultProps = {
  type: "primary",
  disabled: false,
  thin: false,
};
