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
              <li><a href="#home">Начало</a></li>
              <li><a href="#about">За мен</a></li>
              <li><a href="#contacts">Контакти</a></li>
              <li><a href="#quote">Цитати</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
