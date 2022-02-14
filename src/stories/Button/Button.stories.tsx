import React, { ReactElement } from "react";
import { Story } from "@storybook/react";
import { styled } from "@mui/material";
import { Star, Delete, ThumbUp } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 0 auto;

  > * {
    margin: 10px !important;
  }
`;

export const Examples = (): ReactElement => (
  <Row>
    <Button>Primary</Button>
    <Button type="secondary" thin startIcon={<Star />}>
      Secondary
    </Button>
    <Button type="tertiary">Tertiary</Button>
    <Button type="destructive" endIcon={<Delete />}>
      Remove
    </Button>
  </Row>
);

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Next Step" };

export const Secondary = Template.bind({});
Secondary.args = { children: "Go Back", type: "secondary" };

export const Tertiary = Template.bind({});
Tertiary.args = { children: "Cancel", type: "tertiary" };

export const Destructive = Template.bind({});
Destructive.args = { children: "Delete", type: "destructive" };

export const Thin = Template.bind({});
Thin.args = { children: "Smaller", thin: true };

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: "Unfavorite",
  startIcon: <ThumbUp htmlColor={yellow[600]} />,
  type: "secondary",
};

export const WithEndIconAndOnClick = Template.bind({});
WithEndIconAndOnClick.args = {
  children: "Remove",
  endIcon: <Delete />,
  onClick: () => {
    alert("Are you sure?");
  },
  type: "destructive",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Not Ready",
  onClick: () => {
    alert("Are you sure?");
  },
  disabled: true,
};
