import InputPreview from "./Components/Input/InputPreview";
import ToastPreview from "./Components/Toast/ToastPreview";
import Sidebar, {
  type Sidebar as SidebarType,
} from "./Components/Sidebar/Sidebar";
import { House, BookUser, ShoppingBag, FolderCode } from "lucide-react";

export const menuItems: SidebarType[] = [
  {
    name: "Home",
    href: "/",
    icon: <House className="icon mr-3" />,
  },
  {
    name: "Contacts",
    href: "/",
    icon: <BookUser className="icon mr-3" />,
  },
  {
    name: "Shop",
    href: "/",
    icon: <ShoppingBag className="icon mr-3" />,
  },
  {
    name: "Developing",
    href: "/",
    icon: <FolderCode className="icon mr-3" />,
  },
];

export const nestedMenuItems: SidebarType[] = [
  ...menuItems.slice(0, 3),
  {
    ...menuItems[3],
    nested: [
      {
        name: "Frontend",
        href: "/",
      },
      {
        name: "Backend",
        href: "/",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <InputPreview />
        <ToastPreview />
        <Sidebar menuItems={menuItems} />
        <Sidebar menuItems={nestedMenuItems} />
      </main>
    </div>
  );
}
