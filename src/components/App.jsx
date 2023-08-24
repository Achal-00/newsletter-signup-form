import React, { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import Contents from "./Contents";
import Overlay from "./Overlay";

const App = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.querySelector(".overlay").style.display = "grid";
    } else {
      document.querySelector(".overlay").style.display = "none";
    }
  }, [visible]);

  return (
    <div className="container">
      <HeroImage />
      <Contents email={email} setEmail={setEmail} visibility={setVisible} />
      <Overlay visibility={setVisible} email={email} />
    </div>
  );
};

export default App;
