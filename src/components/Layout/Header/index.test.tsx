import { shallow } from "enzyme"
import Header from "."

describe("Header testing", () => {
  it("should render 'header' tag", () => {
    const wrapper = shallow(<Header>Hello</Header>);
    expect(wrapper.find("header").exists()).toBeTruthy();
  });

  it("should render '<span>Hello</span>' in h1", () => {
    const wrapper = shallow(<Header><span>Hello</span></Header>);
    expect(wrapper.find("h1").html()).toBe("<h1><span>Hello</span></h1>");
  })
})