import React, { useState, useEffect } from "react";

export default class PageProgress extends Component {
  constructor(props) {
    super(props);

    this.state = { width: null };
    this.watchScrolling = this.watchScrolling.bind(this);
  }

  watchScrolling() {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    const height = scrollHeight - clientHeight;
    const width = `${(winScroll / height) * 100}%`;
    // document.querySelector(".progress").style.width = width + "%";
    if (height > 0) {
      return this.setState({ width });
    } else {
      return this.setState({ width: 0 });
    }
  }

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
