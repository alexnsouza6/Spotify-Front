import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("when testing w/ snapshots", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
