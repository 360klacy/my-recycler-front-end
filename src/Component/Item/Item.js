import React, { Component } from 'react'
import AddMinus from '../AddMinus/AddMinus'


class Item extends Component {
    render(){

        function showSubCategories(){
            let show = document.querySelectorAll('.show-subs')
            if (true){
                show.style.display = 'block'
                console.log('this is working')
                } else {
                    console.log('oops')
                }
        }


        return (<>

            <div className="category-container">
                <div className="categories">
                            <div className="accordion">
                                    <h2>Automotive</h2>
                                        <button onClick={showSubCategories} className="button">+</button>
                                </div>

                           <div className="show-subs">
                                <div className="sub-category">
                                    <div className="sub-title">
                                        <h3>Auto Parts</h3>
                                        <div className="spacer"></div>
                                    </div>

                                <div className="quantity">
                                    <AddMinus />
                                    <h3>Quantity</h3>
                                </div>

                                <div className="sub-category">
                                    <div className="sub-title">
                                        <h3>Tires</h3>
                                        <div className="spacer"></div>
                                    </div>
                                            
                                    <div className="quantity">
                                        <AddMinus />
                                        <h3>Quantity</h3>
                                    </div>
                                </div>

                                <div className="sub-category">
                                        <div className="sub-title">
                                            <h3>Gas/Oil Mixture</h3>
                                            <div className="spacer"></div>
                                        </div>

                                        <div className="quantity">
                                            <AddMinus />
                                            <h3>Quantity</h3>
                                        </div>
                                    </div>
                                </div>
                           </div>

                          

                                <div className="accordion">
                                    <h2>Batteries</h2>
                                        <button onClick={showSubCategories} className="button">+</button>
                                </div>
                           
                           <div className="show-subs">
                                <div className="sub-category">
                                        <div className="sub-title">
                                            <h3>Car Batteries</h3>
                                            <div className="spacer"></div>
                                        </div>

                                    <div className="quantity">
                                        <AddMinus />
                                        <h3>Quantity</h3>
                                    </div>

                                    <div className="sub-category">
                                        <div className="sub-title">
                                            <h3>Lithium Batteries</h3>
                                            <div className="spacer"></div>
                                        </div>
                                                
                                        <div className="quantity">
                                            <AddMinus />
                                            <h3>Quantity</h3>
                                        </div>
                                    </div>

                                    <div className="sub-category">
                                            <div className="sub-title">
                                                <h3>Zinc-air Batteries</h3>
                                                <div className="spacer"></div>
                                            </div>

                                            <div className="quantity">
                                                <AddMinus />
                                                <h3>Quantity</h3>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                          
              

                </div>
            </div>
        </>)
    }
}


export default Item