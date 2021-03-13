import { Card } from "../index";

import "./Grid.css";

const Grid = (props) => {
  const { characters } = props;

  return (
    <div className="grid">
      {characters
        ? characters.map((character, index) => {
            return <Card key={index} character={character}></Card>;
          })
        : null}
    </div>
  );
};

export default Grid;
