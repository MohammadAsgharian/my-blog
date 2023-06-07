// "use client";

import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { IconType } from "react-icons";

interface Props {
  navItems: { label: string; icon: IconType; href: string }[];
}

const NAV_OPEN_WIDTH = "w-60";
const NAV_CLOSE_WIDTH = "w-12";
const NAV_VISIBILITY = "nav-visibility";

export const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  const [visible, setVisible] = useState(true);

  const navRef = useRef<HTMLElement>(null);

  const toggleNav = (visibility: boolean) => {
    const currentNav = navRef.current;
    if (!currentNav) return;

    const { classList } = currentNav;
    if (visibility) {
      classList.remove(NAV_OPEN_WIDTH);
      classList.add(NAV_CLOSE_WIDTH);
    } else {
      classList.add(NAV_OPEN_WIDTH);
      classList.remove(NAV_CLOSE_WIDTH);
    }

    setVisible(!visible);
  };

  const updateNavState = () => {
    toggleNav(visible);
    const newState = !visible;
    setVisible(newState);
    localStorage.setItem(NAV_VISIBILITY, JSON.stringify(newState));
  };

  useEffect(() => {
    const navState = localStorage.getItem(NAV_VISIBILITY);
    if (navState !== null) {
      if (navState === "false") {
        setVisible(false);
        toggleNav(true);
      }
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between transition-width overflow-hidden sticky top-0"
    >
      <div>
        <Link href="/admin" legacyBehavior>
          <a className="flex items-center space-x-2 p-3 mb-10">
            <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5"></Logo>
            {visible && (
              <span className="fill-highlight-light dark:fill-highlight-dark text-xl font-semibold">
                Admin
              </span>
            )}
          </a>
        </Link>
        <div className="space-y-6">
          {navItems.map((item) => {
            return (
              <Link href={item.href} legacyBehavior>
                <a className="flex ml-2 items-center text-highlight-light dark:text-highlight-light text-xl hover:scale-[0.98] transition">
                  <item.icon size={24} />
                  {visible && (
                    <span className="ml-2 leading-none">{item.label}</span>
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <button
        onClick={updateNavState}
        className="text-highlight-light dark:text-highlight-light p-3 hover:scale-[0.98] transition self-end"
      >
        {visible ? (
          <RiMenuFoldFill size={25} />
        ) : (
          <RiMenuUnfoldFill size={25} />
        )}
      </button>
    </nav>
  );
};
