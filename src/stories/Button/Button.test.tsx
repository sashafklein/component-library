import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../testHelpers";
import "../../mockVariables";
import { Button } from "./Button";

describe(Button, () => {
  describe("onClick", () => {
    it("passes through correctly", () => {
      const onClick = jest.fn();
      const text = "Click me";
      render(<Button onClick={onClick}>{text}</Button>);
      const el = screen.getByText(text);
      fireEvent.click(el);
      expect(onClick).toHaveBeenCalled();
    });

    it("does not pass through when button is disabled", () => {
      const onClick = jest.fn();
      const text = "Don't click me";
      render(
        <Button onClick={onClick} disabled>
          {text}
        </Button>
      );
      const el = screen.getByText(text);
      fireEvent.click(el);
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
