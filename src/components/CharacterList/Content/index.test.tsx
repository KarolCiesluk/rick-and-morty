import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Content from ".";

describe("Content component testing", () => {
  it("renders ErrorMessage when status is 'error'", () => {
    const tree = renderer
      .create(
        <HashRouter>
          <Content status="error"><div>Snapshot test</div></Content>
        </HashRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders Loader when status is 'loading'", () => {
    const tree = renderer
      .create(
        <HashRouter>
          <Content status="loading"><div>Snapshot test</div></Content>
        </HashRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders children prop when status is 'success'", () => {
    const tree = renderer
      .create(
        <HashRouter>
          <Content status="success"><div>Snapshot test</div></Content>
        </HashRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});