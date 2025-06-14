"use client";

import { useEffect, useState } from "react";

const CursorInvertGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-999 mix-blend-difference bg-white rounded-full transition-transform duration-150 ease-out"
      style={{
        width: "40px",
        height: "40px",
        transform: `translate3d(${position.x - 15}px, ${position.y - 15}px, 0)`,
      }}
    />
  );
};

export default CursorInvertGlow;
