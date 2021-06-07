import "./Button.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    background: (props) => props.outline ? "none" : "#E0E0E0",
    border: (props) => props.outline ? "1px solid #3D5AFE" : 0,
    borderRadius: 6,
    boxShadow: (props) => props.outline ? "none" : "0px 2px 3px rgba(51, 51, 51, 0.2)",
    color: (props) => props.outline ? "#3D5AFE" : "#3F3F3F",
    fontFamily: "Noto Sans JP",
    fontWeight: 500,
    fontSize: 14,
    height: 36,
    padding: "0 16px",
    "&:hover, &:focus": {
      background: (props) => props.outline ? "rgba(41, 98, 255, 0.1)" : "#AEAEAE",
    },
  },
});

const Button = ({ placeholder = "Default", ...props }) => {
  console.log(props);
  const classes = useStyles(props);
  return <button className={classes.button}>{placeholder}</button>;
};

export default Button;
