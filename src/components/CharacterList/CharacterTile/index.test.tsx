import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import CharacterTile from ".";

describe("CharacterTile testing", () => {
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

  const wrapper = shallow(
    <CharacterTile
      name={exampleCharacter.name}
      status={exampleCharacter.status}
      species={exampleCharacter.species}
      image={exampleCharacter.image}
    />
  );

  it("should render article html tag", () => {
    expect(wrapper.find("article").exists()).toBeTruthy();
  });

  it("should have Image component with 'https://rickandmortyapi.com/api/character/avatar/81.jpeg' in src attribute", () => {
    const image = wrapper.find("img");
    expect(image.prop('src')).toBe("https://rickandmortyapi.com/api/character/avatar/81.jpeg");
  });

  it("should render 'Crocubot' in h3 tag", () => {
    const name = wrapper.find("h3");
    expect(name.text()).toBe("Crocubot");
  });

  it("should render 'Status: Dead'", () => {
    const status = wrapper.find("[data-testid='status']");
    expect(status.text()).toBe(`Status: ${exampleCharacter.status}`);
  });

  it("should render 'Species: Animal'", () => {
    const status = wrapper.find("[data-testid='species']");
    expect(status.text()).toBe(`Species: ${exampleCharacter.species}`);
  });
});