import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="header-container" >

      <div className="logo">Logo</div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <button className="btn" type="button" >
        Login
      </button>

      </div>

    </header>
  );
};

export default Header;
