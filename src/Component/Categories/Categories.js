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
                        <div className="icon-flex"><img className="icon-img"src="./images/automobile.png" alt="auto" />Automotive</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/battery.png" alt="battery"/>Batteries</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/construction.png" alt="construction"/>Construction</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/electronics.png" alt="electronics"/>Electonics</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/furniture.png" alt="furniture"/>Furniture</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/glass.png" alt="glass"/>Glass</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/gardening.png" alt="gardening"/>Garden</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/holiday.png" alt="holiday"/>Holiday</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/metal.png" alt="metal"/>Metal</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/paint.png" alt="paint"/>Paint</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/paper.png" alt="paper"/>Paper</div>
                        <div className="icon-flex"><img className="icon-img"src="./images/plastic.png" alt="plastic"/>Plastic</div>
                    </div>
                {/* </div> */}
                    <div className="bottom-text">
                        <p>
                            Not sure what you can recycle? We are here to save the world so we encourage you to email us at waste@gotwaste.xyz and upload your photos. Oh yeah dont forget to follow us on Twitter, Facebook, and Instagram.
                        </p>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <button className="btn btn-2">Get Started</button>
                    </div>
            </section>
       </> )
    }
}

export default Categories;