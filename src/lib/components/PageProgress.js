import React, { useState, useEffect } from "react";

// Main Component
const PageProgress = ({ color, height }) => {
  // width state with hooks
  const [width, setWidth] = useState(null);

  // For Updating width of progress bar on scrolling
  const watchScrolling = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    const height = scrollHeight - clientHeight;
    const scrolled = `${(winScroll / height) * 100}%`;
    if (height > 0) {
      return setWidth(scrolled);
    } else {
      return setWidth(0);
    }
  };

  // Alternative Hook for componentDidMount, componentDidUpdate and componentWillUnmount
  useEffect(
    () => {
      window.addEventListener("scroll", watchScrolling);
      return () => {
        window.removeEventListener("scroll", watchScrolling);
      };
    },
    [color, height]
  );

  // computed styling
    const styles = {
      progress: {
        marginTop: 0,
        padding: 0,
        background: color,
        position: "fixed",
        height: height ? height : 4,
        width: width,
        top: 0,
        zIndex: 99,
        transition: "width 200ms ease-out"
      }
    };
    return (
      <div>
        <div style={styles.progress} />
      </div>
    );
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number
  };
}
