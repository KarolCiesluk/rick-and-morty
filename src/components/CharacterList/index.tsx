import CharacterTile from "./CharacterTile";
import Content from "./Content";
import Pagination from "./Pagination";
import useCharactersData from "./useCharactersData";
import { useQueryParameter } from "./useQueryParameter";
import { Character } from "./API";
import { List, ListItem, Section, SectionTitle } from "./styled";

const CharacterList = () => {
  const currentPage = parseInt(useQueryParameter("page") || "1");
  const [status, charactersData] = useCharactersData(currentPage);

  return (
    <Section>

      <SectionTitle>
        Character List
      </SectionTitle>

      <Content status={status}>
        {!!charactersData &&
          <>
            <List>
              {charactersData.results.map(({
                id,
                image,
                name,
                status,
                species
              }: Character) => (
                <ListItem key={id}>
                  <CharacterTile
                    image={image}
                    name={name}
                    status={status}
                    species={species}
                  />
                </ListItem>
              ))}
            </List>
            <Pagination
              lastPage={charactersData.info.pages}
              currentPage={currentPage}
            />
          </>
        }
      </Content>

    </Section>
  );
};

export default CharacterList;