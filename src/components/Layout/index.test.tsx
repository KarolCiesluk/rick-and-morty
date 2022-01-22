import renderer from "react-test-renderer";

import Layout from ".";

describe("Layout testing", () => {
  it("renders ok", () => {
    const tree = renderer
      .create(<Layout><div>Snapshot test</div></Layout>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});