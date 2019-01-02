import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PageProgress extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
    this.watchScrolling = this.watchScrolling.bind(this);
  }

  watchScrolling() {
    window.onscroll = () => {
      // console.log("scrolling....");
      const {
        scrollHeight,
        clientHeight,
        scrollTop
      } = document.documentElement;
      const winScroll = document.body.scrollTop || scrollTop;
      const height = scrollHeight - clientHeight;
      const scrolled = (winScroll / height) * 100;
      // document.querySelector(".progress").style.width = scrolled + "%";
      if (height > 0) {
        return (this.componentRef.current.style.width = scrolled + "%");
      } else {
        return (this.componentRef.current.style.width = 0);
      }
    };
  }

  componentDidMount() {
    this.watchScrolling();
    // console.log(this.myRef)
  }

  render() {
    const { color, height } = this.props;
    const styles = {
      progress: {
        marginTop: 0,
        padding: 0,
        background: color,
        position: "fixed",
        height: height ? height : 4,
        top: 0,
        zIndex: 99,
        transition: "width 200ms ease-out"
      }
    };
    return (
      <div>
        <div style={styles.progress} ref={this.componentRef} />
      </div>
    );
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number
  };
}
