import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Header() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="example">example</Link></li>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="register">Register</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="blog">投稿</Link></li>
        <li><Link to="article">一覧</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default Header;
