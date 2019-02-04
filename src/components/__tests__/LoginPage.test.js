import React from "react";
import { render } from "enzyme";
import renderer from "react-test-renderer";
import LoginPage from "../LoginPage";
import "../../setupTests";

describe("when testing w/ snapshots", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LoginPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("when testing html attributes", () => {
  it("renders a button with specific href", () => {
    const component = render(<LoginPage />);
    const button = component.find("a");
    const redirectURL = button[0].attribs.href;
    expect(redirectURL).toEqual(
      "https://spotify-api-artists-only.herokuapp.com/api/v1/login"
    );
  });
});
