import React, { Suspense } from "react";
import hexRgb from "hex-rgb";
import "./Button.css";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";

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

// hexRgb('#cd2222cc', {format: 'css', alpha: 0.2});

const useStyles = makeStyles({
  button: ({ _theme, ...props }) => ({
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
    padding: "0 16px",
    ...(props.variant === "outline" && {
      background: "none",
      border: "1px solid #3D5AFE",
      boxShadow: "none",
      color: "#3D5AFE",
    }),
    ...(props.variant === "text" && {
      background: "none",
      border: 0,
      boxShadow: "none",
      color: "#3D5AFE",
    }),
    ...(props.size === "sm" && {
      height: 32,
    }),
    ...(props.size === "lg" && {
      height: 42,
    }),
    // color default
    ...{
      color: _theme.default.text,
      background: _theme.default.background,
      boxShadow: `0px 2px 3px ${hexRgb(_theme.default.background, {
        format: "css",
        alpha: 0.2,
      })}`,
    },
    ...(props.color === "primary" && {
      color: _theme.primary.text,
      background: _theme.primary.background,
      boxShadow: `0px 2px 3px ${hexRgb(_theme.primary.background, {
        format: "css",
        alpha: 0.2,
      })}`,
    }),
    ...(props.color === "secondary" && {
      color: _theme.secondary.text,
      background: _theme.secondary.background,
      boxShadow: `0px 2px 3px ${hexRgb(_theme.secondary.background, {
        format: "css",
        alpha: 0.2,
      })}`,
    }),
    ...(props.color === "danger" && {
      color: _theme.danger.text,
      background: _theme.danger.background,
      boxShadow: `0px 2px 3px ${hexRgb(_theme.danger.background, {
        format: "css",
        alpha: 0.2,
      })}`,
    }),

    // disabled
    ...(props.disabled && {
      background: "#E0E0E0",
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
      background: "#AEAEAE",
      ...(props.variant === "outline" && {
        background: "rgba(41, 98, 255, 0.1)",
      }),
      ...(props.variant === "text" && {
        background: "rgba(41, 98, 255, 0.1)",
      }),
      ...(props.color === "primary" && {
        background: "#0039CB",
      }),
      ...(props.color === "secondary" && {
        background: "#1C313A",
      }),
      ...(props.color === "danger" && {
        background: "#9A0007",
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
