import Card from "../Card/Card";

import "./Grid.css";

const Grid = (props) => {
  const { characters } = props;

  return (
    <div className="grid">
      {characters
        ? characters.map((character) => {
            return <Card character={character}></Card>;
          })
        : ""}
    </div>
  );
};

export default Grid;
