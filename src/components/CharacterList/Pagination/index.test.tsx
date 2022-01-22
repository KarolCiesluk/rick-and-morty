import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Pagination from ".";

describe("Pagination tests", () => {
  it("renders ok", () => {
    const tree = renderer
      .create(
        <HashRouter>
          <Pagination lastPage={826} currentPage={1} />
        </HashRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});