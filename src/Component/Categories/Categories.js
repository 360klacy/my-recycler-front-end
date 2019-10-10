import React, {Component} from 'react';
// import './Categories.css';


class Categories extends Component{
    render(){
        console.log(this.props);
        return(<>
            <section className="categories-section">
                    <h1 id="center-h1" className="title">What can be recycled?</h1>
                {/* <div className="row"> */}
                    <div className="cat-container container">
                        <div className="icon-flex"><img className="icon-img"src="./Images/automobile.png" alt="auto" />Automotive</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/battery.png" alt="battery"/>Batteries</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/construction.png" alt="construction"/>Construction</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/electronics.png" alt="electronics"/>Electonics</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/furniture.png" alt="furniture"/>Furniture</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/glass.png" alt="glass"/>Glass</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/gardening.png" alt="gardening"/>Garden</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/holiday.png" alt="holiday"/>Holiday</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/metal.png" alt="metal"/>Metal</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/paint.png" alt="paint"/>Paint</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/paper.png" alt="paper"/>Paper</div>
                        <div className="icon-flex"><img className="icon-img"src="./Images/plastic.png" alt="plastic"/>Plastic</div>
                    </div>
                {/* </div> */}
                    <div className="bottom-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eadolor sit amet, exercitation ullamco laboris nisi ut aliquip ex eadolor sit amet.
                        </p>
                        <button className="btn btn-1">Get Started</button>
                    </div>
            </section>
       </> )
    }
}

export default Categories;