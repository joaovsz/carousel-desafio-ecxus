import { StoryObj,Meta } from "@storybook/react";
import IsDraggingOverlay from "./IsDraggingOverlay";

const meta = {
    title: "Components/IsDraggingOverlay",
    component: IsDraggingOverlay,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      inCarousel: {
        description: "Define se o componente está dentro de um carousel",
      },
    },
  } as Meta<typeof IsDraggingOverlay>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  export const Example: Story = {
    args: {
      inCarousel: false,
    },
  };