import "./navbar.css";

import {
  Moon,
  Sun
} from "lucide-react";

import { useEffect, useState } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if(darkMode){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }

  }, [darkMode]);

  return (

    <header className="navbar">

      <h1 className="logo">
        <span className="logo-a">Bin</span><span className="logo-b">ary</span>
      </h1>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >

        {
          darkMode
          ? <Sun size={22} />
          : <Moon size={22} />
        }

      </button>

    </header>
  );
}

export default Navbar;