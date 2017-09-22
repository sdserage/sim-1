import React, {Component} from "react";
import './Shelf.css';

export default class Shelf extends Component{
  render(){
    return (
      <div className="home">
        <header>Shelf Header</header>
        <ul>
          <li>Bin 1</li>
          <li>Bin 2</li>
          <li>Bin 3</li>
          <li>Bin 4</li>
          <li>Bin 5</li>
        </ul>
      </div>
    );
  };
};
