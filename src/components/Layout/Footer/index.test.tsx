import { shallow } from "enzyme";
import Footer from ".";

describe("Footer testing", () => {
  it("should render 'footer' tag", () => {
    const wrapper = shallow(<Footer footerText="Hello" />);
    expect(wrapper.find("footer").exists()).toBeTruthy();
  });

  it("should render 'Hello' in span", () => {
    const wrapper = shallow(<Footer footerText="Hello" />);
    expect(wrapper.find("span").text()).toBe("Hello");
  });
});