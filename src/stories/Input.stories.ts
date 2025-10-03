import Input from "@/app/Components/Input/Input";
import { StoryObj, type Meta } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
    clearable: false,
  },
};
