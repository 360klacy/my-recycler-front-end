import React, {Component} from 'react';
import '../Categories/CatButtons/CatButtons'
import CatButtons from '../Categories/CatButtons/CatButtons';


class AddCategories extends Component{
    constructor(){
    super()
    this.state = {
        subCategory : {},
        newRows: []
    }
}

componentDidMount(){
    console.log("yall good")
    let newRows = [];
        let x ="";
        let tmpStateObj = Object.assign(this.state.subCategory)
        Object.keys(this.props.categories).forEach((category)=>{
            //   console.log(category)
            newRows.push(<h1>{category}</h1>)
            this.props.categories[category].forEach((subCategory)=>{
                tmpStateObj[subCategory.id] = 0
                newRows.push(<CatButtons button={subCategory.name}  />)
            })
            console.log(newRows)
            this.setState({
                subCategory: tmpStateObj,
                newRows
            })
        })
    }



    render(){
        console.log('hello')
        
            // debugger

             
        
        return(<>
             <div className="table">
                <div className="title1">
                    {this.state.newRows}
                </div>
                </div>

        </>)

    }
}
export default AddCategories 