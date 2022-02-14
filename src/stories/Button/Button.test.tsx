import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../testHelpers";
import { Button, ButtonProps } from "./Button";

const defaultProps = { type: "primary", children: "Click me" };
const renderButton = (passedProps = {}) => {
  const props = { ...defaultProps, ...passedProps } as ButtonProps;
  const onClick = jest.fn();
  props.onClick = onClick;
  render(<Button {...props} />);
  return { button: screen.getByText(props.children as string), ...props };
};

describe(Button, () => {
  describe("onClick", () => {
    it("passes through correctly", () => {
      const { button, onClick } = renderButton();
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });

    it("does not pass through when button is disabled", () => {
      const { button, onClick } = renderButton({ disabled: true });
      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("to", () => {
    it("generates an a tag if absolute", () => {
      const { button } = renderButton({ to: "https://www.google.com" });
      expect(button.tagName).toEqual("A");
      expect((button as HTMLAnchorElement).href).toEqual("https://www.google.com/");
    });

    it("requires a Link prop if relative", () => {
      // Silence console errors associated with expected throw
      jest.spyOn(console, "error").mockImplementation();
      expect(() => {
        renderButton({ to: "/loans" });
      }).toThrowError('Relative "to" value given to Button without a Link');
    });
  });
});
