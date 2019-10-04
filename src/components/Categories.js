import React, {Component} from 'react';
import './Categories.css';

class Categories extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="col 12 waypoint">
                <div className="row">
                    <div className="cat-container">
                        <div><img src="./Images/automobile.png" alt="auto"></img>Automotive</div>
                        <div><img src="./Images/battery.png" alt="battery"></img>Batteries</div>
                        <div><img src="./Images/construction.png" alt="construction"></img>Construction</div>
                        <div><img src="./Images/electronics.png" alt="electronics"></img>Electonics</div>
                        <div><img src="./Images/furniture.png" alt="furniture"></img>Furniture</div>
                        <div><img src="./Images/glass.png" alt="glass"></img>Glass</div>
                        <div><img src="./Images/gardening.png" alt="gardening"></img>Garden</div>
                        <div><img src="./Images/holiday.png" alt="holiday"></img>Holiday</div>
                        <div><img src="./Images/metal.png" alt="metal"></img>Metal</div>
                        <div><img src="./Images/paint.png" alt="paint"></img>Paint</div>
                        <div><img src="./Images/paper.png" alt="paper"></img>Paper</div>
                        <div><img src="./Images/plastic.png" alt="plastic"></img>Plastic</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;