import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => {
      window.onscroll = null; //window.removeEventListener('scroll',handleScroll)
    };
  }, []);

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
    </div>
  );
}
