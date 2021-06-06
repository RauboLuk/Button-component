import "./Button.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
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
  },
});

const Button = ({ placeholder = "Default" }) => {
  const classes = useStyles();
  return <button className={classes.button}>{placeholder}</button>;
};

export default Button;
