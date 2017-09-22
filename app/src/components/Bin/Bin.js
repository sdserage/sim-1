import React, {Component} from "react";
import './Bin.css';

export default class Shelf extends Component{
  render(){
    return (
      <div className="home">
        <header>Bin Header</header>
        <p>Name</p>
        <input type='text'/>
        <p>Price</p>
        <input type='text'/>
        <div>
          <button>Edit</button>
          <button>Delete</button>
          <button>+ Add to Inventory</button>
        </div>
      </div>
    );
  };
};
