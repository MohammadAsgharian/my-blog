import Link from "next/link";
import { FC } from "react";
import Logo from "./Logo";
import {
  AiOutlineDashboard,
  AiOutlineContainer,
  AiOutlineTeam,
  AiOutlineMail,
} from "react-icons/ai";
import { IconType } from "react-icons";

interface Props {
  navItems: { label: string; icon: IconType; href: string }[];
}

const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark">
      <Link href="/admin" legacyBehavior>
        <a className="flex items-center space-x-2 p-3 mb-10">
          <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5"></Logo>
          <span className="fill-highlight-light dark:fill-highlight-dark text-xl font-semibold">
            Admin
          </span>
        </a>
      </Link>
      <div className="space-y-6">
        {navItems.map((item) => {
          return (
            <Link href={item.href} legacyBehavior>
              <a className="flex items-center text-highlight-light dark:text-highlight-light text-xl hover:scale-[0.98] transition">
                <item.icon size={24} />
                <span className="ml-2">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default AdminNav;
