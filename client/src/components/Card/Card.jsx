import "./Card.css";

const Card = (props) => {
  const { character } = props;

  return (
    <div className="card">
      <div className="avatar">
        <img src={character.image} alt={character.name}></img>
      </div>
      <div className="details">
        <div className="name">{character.name}</div>
        <div className={`status ${character.status.toLowerCase()}`}>
          {character.status} - {character.species}
        </div>
      </div>
    </div>
  );
};

export default Card;
