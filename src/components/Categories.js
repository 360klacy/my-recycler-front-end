import React, {Component} from 'react';
import './Categories.css';

class Categories extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="col 12 waypoint">
                <div className="row">
                    <div className="cat-container">
                        <div><img src="./automobile.png" alt="auto"></img>Automotive</div>
                        <div><img src="./battery.png" alt="battery"></img>Batteries</div>
                        <div><img src="./construction.png" alt="construction"></img>Construction</div>
                        <div><img src="./electronics.png" alt="electronics"></img>Electonics</div>
                        <div><img src="./furniture.png" alt="furniture"></img>Furniture</div>
                        <div><img src="./glass.png" alt="glass"></img>Glass</div>
                        <div><img src="./gardening.png" alt="gardening"></img>Garden</div>
                        <div><img src="./holiday.png" alt="holiday"></img>Holiday</div>
                        <div><img src="./metal.png" alt="metal"></img>Metal</div>
                        <div><img src="./paint.png" alt="paint"></img>Paint</div>
                        <div><img src="./paper.png" alt="paper"></img>Paper</div>
                        <div><img src="./plastic.png" alt="plastic"></img>Plastic</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;