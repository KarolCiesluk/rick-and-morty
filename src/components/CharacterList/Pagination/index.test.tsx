import { mount } from "enzyme";
import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Pagination from ".";

describe("Pagination testing", () => {
  it("renders ok", () => {
    const tree = renderer
      .create(
        <HashRouter>
          <Pagination lastPage={826} currentPage={1} />
        </HashRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render '2 of 826' in span html tag", () => {
    const wrapper = mount(
      <HashRouter>
        <Pagination lastPage={826} currentPage={2} />
      </HashRouter>
    );

    expect(wrapper.find("span").text())
      .toBe("2 of 826");
  });

  it("should render 4 buttons", () => {
    const wrapper = mount(
      <HashRouter>
        <Pagination lastPage={826} currentPage={2} />
      </HashRouter>
    );

    expect(wrapper.find("button").length).toBe(4);
  });

  it("should button 'back to first page' and button 'go to previous page' be disabled when current page equals to 1", () => {
    const wrapper = mount(
      <HashRouter>
        <Pagination lastPage={826} currentPage={1} />
      </HashRouter>
    );

    const firstPageButton = wrapper.find("button").get(0);
    expect(firstPageButton.props.disabled).toBe(true);

    const previousPageButton = wrapper.find("button").get(1);
    expect(previousPageButton.props.disabled).toBe(true);
  });

  it("should button 'go to last page' and button 'go to next page' be enabled when current page equals to 1", () => {
    const wrapper = mount(
      <HashRouter>
        <Pagination lastPage={826} currentPage={1} />
      </HashRouter>
    );

    const nextPageButton = wrapper.find("button").get(2);
    expect(nextPageButton.props.disabled).toBe(false);

    const lastPageButton = wrapper.find("button").get(3);
    expect(lastPageButton.props.disabled).toBe(false);
  });

  it("should button 'back to first page' and button 'go to previous page' be enabled when current page equals to 826", () => {
    const wrapper = mount(
      <HashRouter>
        <Pagination lastPage={826} currentPage={826} />
      </HashRouter>
    );

    const firstPageButton = wrapper.find("button").get(0);
    expect(firstPageButton.props.disabled).toBe(false);

    const previousPageButton = wrapper.find("button").get(1);
    expect(previousPageButton.props.disabled).toBe(false);
  });

  it("should button 'go to last page' and button 'go to next page' be disabled when current page equals to 826", () => {
    const wrapper = mount(
      <HashRouter>
        <Pagination lastPage={826} currentPage={826} />
      </HashRouter>
    );

    const nextPageButton = wrapper.find("button").get(2);
    expect(nextPageButton.props.disabled).toBe(true);

    const lastPageButton = wrapper.find("button").get(3);
    expect(lastPageButton.props.disabled).toBe(true);
  });

  it("should all buttons be enabled when current page equals to 5", () => {
    const wrapper = mount(
      <HashRouter>
        <Pagination lastPage={826} currentPage={5} />
      </HashRouter>
    );

    const firstPageButton = wrapper.find("button").get(0);
    expect(firstPageButton.props.disabled).toBe(false);

    const previousPageButton = wrapper.find("button").get(1);
    expect(previousPageButton.props.disabled).toBe(false);

    const nextPageButton = wrapper.find("button").get(2);
    expect(nextPageButton.props.disabled).toBe(false);

    const lastPageButton = wrapper.find("button").get(3);
    expect(lastPageButton.props.disabled).toBe(false);
  });
});