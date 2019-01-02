import React, { Component } from "react";
import gif from "./giphy.gif";

import PageProgress from "../lib";

export default class App extends Component {
  render() {
    return (
      <div className="divExample">
        <PageProgress color={"skyblue"} height={4} />
        <h1 className="hExample">React Page Progress Here!</h1>
        <p className="scrollIt">Just Scroll It</p>
        <Child />
      </div>
    );
  }
}

const Child = () => {
  return (
    <div className="childDiv">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        cupiditate error quisquam exercitationem enim. Libero earum maxime
        accusantium non quasi quod, eligendi provident eveniet facere?
        Voluptates officia autem ipsam saepe!
      </p>
      <p className="proTop">Progress Bar at the Top</p>
      <div className="magicImage">
        <img src={gif} alt={"loading"} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        cupiditate error quisquam exercitationem enim. Libero earum maxime
        accusantium non quasi quod, eligendi provident eveniet facere?
        Voluptates officia autem ipsam saepe!
      </p>
      <p className="awesome">Wow... It's Awesome</p>
    </div>
  );
};
