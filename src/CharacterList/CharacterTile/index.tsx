interface CharacterTileProps {
  image: string;
  name: string;
  status: string;
  species: string;
}

const CharacterTile = ({ image, name, status, species }: CharacterTileProps) => (
  <section>
    <img src={image} alt="" />
    <h3>{name}</h3>
    <p>Status: {status}</p>
    <p>Species: {species}</p>
  </section>
);

export default CharacterTile;