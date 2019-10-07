import React, { Component } from 'react'
import './Categories.css';


function ClickCategories(props){
  return(<>
      <div className="cat-container container">
        <div className="icon-flex"><button><img className="icon-img"src="./Images/automobile.png" alt="auto" />Automotive +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/battery.png" alt="battery"/>Batteries +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/construction.png" alt="construction"/>Construction +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/electronics.png" alt="electronics"/>Electonics +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/furniture.png" alt="furniture"/>Furniture +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/glass.png" alt="glass"/>Glass +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/gardening.png" alt="gardening"/>Garden +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/holiday.png" alt="holiday"/>Holiday +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/metal.png" alt="metal"/>Metal +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/paint.png" alt="paint"/>Paint +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/paper.png" alt="paper"/>Paper +</button></div>
        <div className="icon-flex"><button><img className="icon-img"src="./Images/plastic.png" alt="plastic"/>Plastic +</button></div>
    </div>
  </>)
}
export default ClickCategories;