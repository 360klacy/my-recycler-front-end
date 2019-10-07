import React, { Component } from 'react';
import './CatButtons.css'



class CatButtons extends Component{

        

    render(){
        return(  <>    
        <div class="category-container">
            <div className='left'><h2>{this.props.button}</h2></div>
                <div className='right'>
                <div className="add-minus">
                    <input className="add-button" type="button"  value="+" />
                    <input className="subtract-button" type="button" value="-" />
                    <input type='text' className='counter' />
                </div>
            </div>
        </div>
        </>)
    }
}

export default CatButtons