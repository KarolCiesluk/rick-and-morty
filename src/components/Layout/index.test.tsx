import renderer from "react-test-renderer";

import Layout from ".";

it("renders ok", () => {
  const tree = renderer
    .create(<Layout><div>Snapshot test</div></Layout>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});