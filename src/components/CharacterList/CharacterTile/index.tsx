import { Image, CharacterInfo } from "./styled";

interface CharacterTileProps {
  image: string;
  name: string;
  status: string;
  species: string;
}

const CharacterTile = ({ image, name, status, species }: CharacterTileProps) => (
  <article>
    <Image src={image} alt="" />
    <h3>{name}</h3>
    <CharacterInfo data-testid="status">
      Status: <b>{status}</b>
    </CharacterInfo>
    <CharacterInfo data-testid="species">
      Species: <b>{species}</b>
    </CharacterInfo>
  </article>
);

export default CharacterTile;