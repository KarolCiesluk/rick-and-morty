import Header from "./Header";
import { Character } from "./interfaces";
import Pagination from "./Pagination";
import useCharactersData from "./useCharactersData";
import { useQueryParameter } from "./useQueryParameter";

const CharacterList = () => {
  const currentPage = parseInt(useQueryParameter("page") || "1");
  const [status, charactersData] = useCharactersData(currentPage);

  return (
    <>
      <Header>Rick and Morty app</Header>
      <main>
        <h2>Character List</h2>
        {!!charactersData &&
          <>
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
            <Pagination
              lastPage={charactersData.info.pages}
              currentPage={currentPage}
            />
          </>
        }
      </main>
    </>
  );
};

export default CharacterList;