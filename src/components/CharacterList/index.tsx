import CharacterTile from "./CharacterTile";
import { Character } from "./interfaces";
import Pagination from "./Pagination";
import useCharactersData from "./useCharactersData";
import { useQueryParameter } from "./useQueryParameter";

const CharacterList = () => {
  const currentPage = parseInt(useQueryParameter("page") || "1");
  const [status, charactersData] = useCharactersData(currentPage);

  return (
    <section>

      <h2>
        Character List
      </h2>

      {!!charactersData &&
        <>
          <ul>
            {charactersData.results.map(({ id, image, name, status, species }: Character) => (
              <li key={id}>
                <CharacterTile
                  image={image}
                  name={name}
                  status={status}
                  species={species}
                />
              </li>
            ))}
          </ul>
          <Pagination
            lastPage={charactersData.info.pages}
            currentPage={currentPage}
          />
        </>
      }

    </section>
  );
};

export default CharacterList;