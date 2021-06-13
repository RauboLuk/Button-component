import React, { Suspense } from "react";
import hexRgb from "hex-rgb";
import "./Button.css";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";

const getColor = (color) => {
  switch (color) {
    case "primary":
      return _theme.primary;
    case "secondary":
      return _theme.secondary;
    case "danger":
      return _theme.danger;

    default:
      return _theme.default;
  }
};

const _theme = {
  default: {
    text: "#3F3F3F",
    background: "#E0E0E0",
    focus: "#AEAEAE",
  },
  primary: {
    text: "#FFFFFF",
    background: "#2962FF",
    focus: "#0039CB",
  },
  secondary: {
    text: "#FFFFFF",
    background: "#455A64",
    focus: "#1C313A",
  },
  danger: {
    text: "#FFFFFF",
    background: "#D32F2F",
    focus: "#9A0007",
  },
};

const useStyles = makeStyles({
  button: ({ _theme, ...props }) => ({
    // BASE
    outline: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.7rem",
    border: 0,
    borderRadius: 6,
    fontFamily: "Noto Sans JP",
    fontWeight: 500,
    fontSize: 14,
    height: 36,
    color: getColor(props.color).text,
    background: getColor(props.color).background,
    boxShadow: `0px 2px 3px ${hexRgb(getColor(props.color).background, {
      format: "css",
      alpha: 0.2,
    })}`,
    padding: "0 16px",
    ...(props.size === "sm" && {
      height: 32,
    }),
    ...(props.size === "lg" && {
      height: 42,
    }),

    // VARIANTS
    ...(props.variant === "outline" && {
      background: "none",
      border: `1px solid ${getColor(props.color).background}`,
      boxShadow: "none",
      color: getColor(props.color).background,
    }),
    ...(props.variant === "text" && {
      background: "none",
      border: 0,
      boxShadow: "none",
      color: getColor(props.color).background,
    }),

    // disabled
    ...(props.disabled && {
      background: getColor(props.color).background,
      color: "#9E9E9E",
      boxShadow: "none",
    }),
    ...(props.variant === "text" &&
      props.disabled && {
        background: "none",
      }),
    ...(props.disableShadow && {
      boxShadow: "none",
    }),

    "&:hover, &:focus": {
      background: getColor(props.color).focus,
      ...((props.variant === "outline" || props.variant === "text") && {
        background: `${hexRgb(getColor(props.color).background, {
          format: "css",
          alpha: 0.1,
        })}`,
      }),

      // disabled
      ...(props.disabled && {
        background: "#E0E0E0",
        color: "#9E9E9E",
      }),
      ...(props.variant === "text" &&
        props.disabled && {
          background: "none",
        }),
    },
  }),
  icon: { fontSize: 14 },
});

const Button = ({ placeholder = "Default", startIcon, endIcon, ...props }) => {
  console.log(props);
  const stylesProps = { ...props, _theme };
  console.log(stylesProps);
  const classes = useStyles(stylesProps);

  const renderStartIcon = startIcon && (
    <Icon className={classes.icon}>{startIcon}</Icon>
  );
  const renderEndIcon = endIcon && (
    <Icon className={classes.icon}>{endIcon}</Icon>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button className={classes.button} disabled={props.disabled}>
        {renderStartIcon}
        {placeholder}
        {renderEndIcon}
      </button>
    </Suspense>
  );
};

export default Button;
