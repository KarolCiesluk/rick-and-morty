import renderer from "react-test-renderer";

import CharacterTile from ".";

describe("CharacterTile tests", () => {
  const exampleCharacter = {
    "name": "Crocubot",
    "status": "Dead",
    "species": "Animal",
    "image": "https://rickandmortyapi.com/api/character/avatar/81.jpeg",
  };

  it("renders ok", () => {
    const tree = renderer
      .create(
        <CharacterTile
          name={exampleCharacter.name}
          status={exampleCharacter.status}
          species={exampleCharacter.species}
          image={exampleCharacter.image}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});