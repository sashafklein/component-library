import React, { ReactElement } from "react";
import { Button as MuiButton } from "@mui/material";
import cx from "classnames";

import { isAbsoluteURL } from "@shared/utils";
import styles from "!style-loader!css-loader!sass-loader!./Button.module.scss";

type ButtonType = "primary" | "secondary" | "tertiary" | "destructive";

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
  Link?: ReactElement;
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
    className: cx(styles.button, styles[type], thin && styles.thin, disabled && styles.disabled),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  if (!disabled) {
    if (onClick) {
      passedProps.onClick = onClick;
    }

    if (to) {
      passedProps.href = to;
      if (isAbsoluteURL(to)) {
        passedProps.component = "a";
        passedProps._target = "blank";
      } else if (!Link) {
        throw new Error('Relative "to" value given to Button without a Link.');
      } else {
        passedProps.component = Link;
      }
    }
  }

  return <MuiButton {...passedProps}>{children}</MuiButton>;
};

Button.defaultProps = {
  type: "primary",
  disabled: false,
  thin: false,
};
