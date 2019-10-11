import React, { Component } from 'react';
import './CatButtons.css'



class CatButtons extends Component{
    constructor(){
        super()
        this.state = {
            value: 0
        }
    }
    componentDidUpdate(){
        // console.log(this.props.quantity)
        if(this.state.value !== this.props.quantity[this.props.button]){
            this.setState({
                value: this.props.quantity[this.props.button]
            })
        }
    }
    render(){
        // console.log(this.props.quantity)
        return(<>    
            <div key={this.props.kprop} className="category-container">
                <div className='left'><h2>{this.props.button}</h2></div>
                    <div className='right'>
                        <div className="add-minus">

                        <input className="add-button" name={this.props.button} onClick={this.props.fnAdd} type="button" value="+" />
                        <input className="subtract-button" name={this.props.button} onClick={this.props.fnSubtract} type="button" value="-" />
                        {/* <p>{this.props.quantity}</p> */}
                        <p>{this.state.value}</p>
                        </div>
                    </div>
            </div>
        </>)
    }
}

export default CatButtons