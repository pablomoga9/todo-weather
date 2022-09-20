import React from "react";
import { shallow } from "enzyme";
import Predictions from "./Predictions";

describe("Predictions", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Predictions />);
    expect(wrapper).toMatchSnapshot();
  });
});
