import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutHeader from "./AboutHeader.tsx";
import { AboutContent } from "./AboutContent.tsx";

export function About() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div id="about" className="col col-12 col-md-6 col-lg-4 col-xl-3 m-auto">
      <AboutHeader shiftButton={setShowAbout} showAbout={showAbout} />
      {showAbout && <AboutContent />}
    </div>
  );
}

export default About;
