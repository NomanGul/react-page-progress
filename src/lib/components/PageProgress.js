import React, { useState, useEffect } from "react";

// Main Component
const PageProgress = ({ color, height }) => {

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

  componentDidMount() {
    window.addEventListener("scroll", this.watchScrolling);
    // console.log(this.myRef)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.watchScrolling);
  }

  render() {
    const { width } = this.state;
    const { color, height } = this.props;
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
