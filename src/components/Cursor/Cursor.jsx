import "./Cursor.css";
import { useEffect, useState } from "react";

function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isLeftSide, setIsLeftSide] = useState(true);

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsLeftSide(
        e.clientX < window.innerWidth / 2
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div
      className={`custom-cursor ${isLeftSide ? "cursor-orange" : "cursor-green"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

export default Cursor;