import React, { useState, useEffect } from "react";

const PageProgress = ({ color, thickness, isVertical, speed, isDirection, ...props }) => {
  const [dimension, setDimension] = useState(null);

  const watchScrolling = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    const winHeight = scrollHeight - clientHeight;
    const scrolled = `${(winScroll / winHeight) * 100}%`;
    if (winHeight > 0) {
      return setDimension(scrolled);
    } else {
      return setDimension(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", watchScrolling);
    return () => {
      window.removeEventListener("scroll", watchScrolling);
    };
  }, [color, thickness]);

  const styles = {
    progress: {
      marginTop: 0,
      padding: 0,
      background: color ? color : "skyblue",
      position: "fixed",
      height: isVertical ? dimension : thickness || 5,
      width: !isVertical ? dimension : thickness || 5,
      [isDirection]: 0,
      zIndex: 99,
      transition: `${isVertical ? 'height' : 'width'} ${speed  || 200}ms ease-out`
    }
  };

  return <div style={styles.progress} {...props} />;
};

export default PageProgress;
