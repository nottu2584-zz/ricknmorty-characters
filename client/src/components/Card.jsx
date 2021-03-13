import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    display: "inline-flex",
    flexWrap: "wrap",
    flex: "0 1 calc(25% - 20px)",
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
    flex: "2 1 0",
    lineHeight: "0",
    "& img": {
      maxHeight: "100%",
      maxWidth: "100%",
      margin: 0,
      objectFit: "cover",
    },
  },
  details: {
    flex: "3 1 0",
    padding: ".75rem",
    textAlign: "left",
    name: {
      fontSize: "1.5em",
    },
    status: {
      textTransform: "capitalize",
      "&::before": {
        display: "inline-block",
        content: '""',
        borderRadius: "50%",
        padding: "0.25em",
        marginRight: "0.25em",
        backgroundColor: "#c2c2c2",
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
  "@media only screen and (max-width: 768px)": {
    avatar: {
      flex: "1 1 100%",
    },
    details: {
      flex: "1 1 100%"
    }
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
        <div className={`${classes.details} ${character.status.toLowerCase()}`}>
          {character.status} - {character.species}
        </div>
      </div>
    </div>
  );
};

export default Card;
