import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    message: {
        padding: "2em"
    },
    title: {
        fontFamily: "'Bungee', cursive",
        fontSize: "1.5rem",
        borderBottom: "2px solid",
        color:" #ff0033",
        lineHeight: "1em",
        marginBottom: ".75em",
    }
});

const FormMessage = (props) => {
    const {title} = props;
    
    const classes = useStyles();

    return (
        <div className={classes.message}>
            { title ? <div className={classes.title}>{title}</div> : null }
            <div>{props.children}</div>
        </div>
    );
};

export default FormMessage;