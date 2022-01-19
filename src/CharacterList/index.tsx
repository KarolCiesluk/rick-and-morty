import { Character } from "./interfaces";
import useCharactersData from "./useCharactersData";

const CharacterList = () => {
  const [status, charactersData] = useCharactersData();

  return (
    <>
      <header>
        <h1>Rick and Morty app</h1>
      </header>
      <main>
        <h2>Character List</h2>
        {!!charactersData &&
          <ul>
            {charactersData.results.map(({ id, image, name, status, species }: Character) => (
              <li key={id}>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
              </li>
            ))}
          </ul>
        }
      </main>
    </>
  );
};

export default CharacterList;