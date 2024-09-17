import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("renders App", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
