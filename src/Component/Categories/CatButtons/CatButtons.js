import React, { Component } from 'react';
import './CatButtons.css'



class CatButtons extends Component{

    constructor(props){
        super(props);
        this.state={ 
            count: 0
        }
    }

    onClick(type){
        this.setState(prevState => {
           return {count: type === 'add' ? prevState.count + 1: prevState.count - 1}
        });
    }
        

    render(){
        return(  <>    
        <div class="category-container">
            <div className='left'><h2>{this.props.button}</h2></div>
                <div className='right'>
                <div className="add-minus">
                    <input className="add-button" type='button' onClick={this.onClick.bind(this, 'add')} value='+'/>
                    <input className="add-button" type='button' onClick={this.onClick.bind(this, 'sub')} value='-'/>
                    <input type='text' className='counter' placeholder={this.state.count}/>
                </div>
            </div>
        </div>
        </>)
    }
}

export default CatButtons