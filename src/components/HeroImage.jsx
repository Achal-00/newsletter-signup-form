import { useState, useEffect } from "react";

const HeroImage = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(screen.width);
    }
  }, []);

  if (width < 1200) {
    return (
      <div className="mobile-image-holder">
        <img src="illustration-sign-up-mobile.svg" alt="illustration" />
      </div>
    );
  } else {
    return (
      <div className="desktop-image-holder">
        <img src="illustration-sign-up-desktop.svg" alt="illustration" />
      </div>
    );
  }
};

export default HeroImage;
