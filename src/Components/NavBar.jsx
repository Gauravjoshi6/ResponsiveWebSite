import React, { useState } from "react";
// Assuming you have a CSS file for styles

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
    console.log("Menu toggled", !menuOpen);
  };

  return (
    <header>
      <nav>
        <div
          className="container"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="left">
            <div className="circle" aria-hidden="true"></div>
            <img src="./assets/open-book.png" alt="Open Book" />
            <h3>BookAI</h3>
          </div>
          <div className={`menu ${menuOpen ? "open" : ""}`} id="right">
            <ul>
              <li>
                <a href="#" className="nav-bar">
                  Home
                </a>
              </li>
              <li>
                <a href="#How It Work" className="nav-bar id">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#Roadmap" className="nav-bar">
                  Roadmap
                </a>
              </li>
              <li>
                <select
                  name="options"
                  id="options"
                  className="nav-bar1"
                  onChange={handleSelectChange}
                >
                  <option value="">Select option</option>
                  <option value="https://trybookai.com/api">API</option>
                  <option value="https://trybookai.com/api#pricing">
                    Price
                  </option>
                </select>
              </li>
              <li>
                <button id="login-button">Login/Sign In</button>
              </li>
            </ul>
          </div>
        </div>
        <button
          id="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        >
          <img src="./assets/menu-bar.png" alt="Remove" />
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
