import Input from "@/app/Components/Input/Input";
import Sidebar from "@/app/Components/Sidebar/Sidebar";
import { menuItems, nestedMenuItems } from "@/app/page";
import { StoryObj, type Meta } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const DefaultSidebar: Story = {
  args: {
    menuItems: menuItems,
  },
};

export const NestedSidebar: Story = {
  args: {
    menuItems: nestedMenuItems,
  },
};
