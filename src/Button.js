import "./Button.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: (props) => ({
    outline: 0,
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

    "&:hover, &:focus": {
      background: "#AEAEAE",
      ...(props.variant === "outline" && {
        background: "rgba(41, 98, 255, 0.1)",
      }),
      ...(props.variant === "text" && {
        background: "rgba(41, 98, 255, 0.1)",
      }),
    },
  }),
});

const Button = ({ placeholder = "Default", disabled, ...props }) => {
  console.log(props);
  const classes = useStyles(props);
  return (
    <button className={classes.button} disabled>
      {placeholder}
    </button>
  );
};

export default Button;
