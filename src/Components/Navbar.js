import React, { useState } from "react";
import Logo from "./ImVt Logo.png";
export default function Navbar({ setTitle }) {
  const [value, setValue] = useState("");
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    setTitle(value);
  };

  return (
    <header>
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <div className="content">
            <div className="logo">
              <a href="/">
                <img src={Logo} className="logoImg" alt="" />
              </a>
            </div>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <i className="fas fa-search"></i>
          </label>
          <form action="#" className="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              value={value}
              onChange={handleOnChange}
              required
            />
            <button type="submit" onClick={handleOnClick} className="go-icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
