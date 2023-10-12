import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutHeader from "./AboutHeader.tsx";
import { AboutContent } from "./AboutContent.tsx";

export function About() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div
      id="about"
      className={
        showAbout
          ? "col col-12 col-md-10 col-lg-7 m-auto"
          : "col col-12 col-md-6 col-lg-4 m-auto"
      }
    >
      <AboutHeader shiftButton={setShowAbout} showAbout={showAbout} />
      {showAbout && <AboutContent />}
    </div>
  );
}

export default About;
