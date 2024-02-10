"use client"
import { useEffect } from "react";

export function Windowsize({ children }) {
  useEffect(() => {
    function handleResize() {
      const r = document.querySelector(':root');
      const b = document.querySelector('body');

      r.style.setProperty('--window-width', b.clientWidth + "px");
      r.style.setProperty('--window-height', b.clientHeight + "px");
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  console.log("owo")

  return (<>{children}</>);
}