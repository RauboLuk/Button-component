import React, { Suspense } from "react";
import "./Button.css";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  button: (props) => ({
    outline: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.7rem",
    background: "#E0E0E0",
    border: 0,
    borderRadius: 6,
    boxShadow: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    color: "#3F3F3F",
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
    ...(props.disableShadow && {
      boxShadow: "none",
    }),
    ...(props.size === "sm" && {
      height: 32,
    }),
    ...(props.size === "lg" && {
      height: 42,
    }),
    ...(props.color === "primary" && {
      color: "#FFFFFF",
      background: "#2962FF",
      boxShadow: "0px 2px 3px rgba(41, 98, 255, 0.2)",
    }),
    ...(props.color === "secondary" && {
      color: "#FFFFFF",
      background: "#455A64",
      boxShadow: "0px 2px 3px rgba(69, 90, 100, 0.2)",
    }),
    ...(props.color === "danger" && {
      color: "#FFFFFF",
      background: "#D32F2F",
      boxShadow: "0px 2px 3px rgba(211, 47, 47, 0.2)",
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
  const classes = useStyles(props);

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
