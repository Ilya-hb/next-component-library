import Toast from "@/app/Components/Toast/Toast";
import { StoryObj, type Meta } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

export const successToast: Story = {
  args: {
    message: "You successfully received a message",
    type: "success",
  },
};

export const infoToast: Story = {
  args: {
    message: "You successfully received an info message",
    type: "info",
  },
};

export const errorToast: Story = {
  args: {
    message: "You successfully receive an error message :)",
    type: "error",
  },
};

export const SmallDurationToast: Story = {
  args: {
    message: "You successfully receive an error message :)",
    type: "info",
    duration: 1000
  }
};
