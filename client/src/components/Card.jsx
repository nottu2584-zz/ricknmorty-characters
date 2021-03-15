import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    flex: "1 1 calc(1000% - 20px)",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    margin: 10,
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
  },
  avatar: {
    backgroundColor: "#c2c2c2",
    flex: "100%",
    lineHeight: "0",
    "& img": {
      height: "100%",
      width: "100%",
      margin: 0,
      objectFit: "cover",
    },
  },
  details: {
    flex: "100%",
    padding: ".75rem",
    textAlign: "left",
    name: {
      fontSize: "1.5em",
    },
    "& .status": {
      textTransform: "capitalize",
      fontSize: "0.75em",
      "&::before": {
        backgroundColor: "#c2c2c2",
        borderRadius: "50%",
        content: '""',
        display: "inline-block",
        marginRight: "0.25em",
        padding: "0.25em",
        verticalAlign: "baseline",
      },
      "& .dead::before": {
        backgroundColor: "#d84315",
      },
      "& .alive::before": {
        backgroundColor: "#8bc34a",
      },
    },
  },
  "@media only screen and (min-width: 480px)": {
    card: {
      flex: "1 1 calc(50% - 20px)",
    },
  },
  "@media only screen and (min-width: 768px)": {
    card: {
      flex: "1 1 calc(25% - 20px)",
    },
    avatar: {
      flex: "2 1 0",
    },
    details: {
      flex: "4 1 0",
    },
  },
});

const Card = (props) => {
  const { character } = props;

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.avatar}>
        <img src={character.image} alt={character.name}></img>
      </div>
      <div className={classes.details}>
        <div className={classes.details.name}>{character.name}</div>
        <div className={`status ${character.status.toLowerCase()}`}>
          {character.status} - {character.species}
        </div>
      </div>
    </div>
  );
};

export default Card;
