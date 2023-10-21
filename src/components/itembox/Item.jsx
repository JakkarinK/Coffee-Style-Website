import React from "react";
import "./item.scss";

import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item-pic">
        <img src={props.cover} alt="item-pic" />
        <h1 className={props.status}>On sale.</h1>
        <Link to={props.link}><p>Explore Mug</p></Link>
      </div>
      <h1>{props.name}</h1>
      <div className={props.status}>
      <span>${props.sprice}</span>
      <span>$ {props.price} USD</span>
      </div>
    </div>
  );
};

export default Item;
