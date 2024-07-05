import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const navLinks = [
  { name: "Home", id: "" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
  { name: "Login", id: "login" },
  { name: "Register", id: "register" },
];

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-container">
          <Link href="/">
            <Image
              className="logo"
              src="/images/logo.png"
              alt="logo"
              height={90}
              width={350}
            />
          </Link>

          <div className="nav-links">
            {navLinks?.map((link) => (
              <Link key={link.id} href={`/${link.id}`}>

                {link.name}
              </Link>
            ))}
          </div>

          <div onClick={openSidebar} className="nav-menu">
            Menu
          </div>

          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div onClick={closeSidebar} className="close-icon">
              x
            </div>
            <div className="sidebar-links">
              {navLinks?.map((link) => (
                <Link key={link.id} onClick={closeSidebar} href={`/${link.id}`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
