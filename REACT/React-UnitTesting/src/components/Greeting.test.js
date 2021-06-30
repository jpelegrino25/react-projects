import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("");
  test();
});
