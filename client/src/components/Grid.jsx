import { Card } from "./index";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  grid: {
    alignItems: "center",
    display: "inline-flex",
    flex: "1 1 auto",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const Grid = (props) => {
  const { characters } = props;

  const classes = useStyles();

  return (
    <div className={classes.grid}>
      {characters
        ? characters.map((character, index) => {
            return <Card key={index} character={character}></Card>;
          })
        : null}
    </div>
  );
};

export default Grid;
