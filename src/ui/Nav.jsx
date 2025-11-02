import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-body">
      <div className="site">
        <header>
          <h1><a href="#home">Denis</a></h1>

          <button
            className="menu-button"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            Menu
          </button>

          <nav className={`main-nav ${open ? "open" : ""}`} aria-hidden={!open}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#quote">Quotes</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}