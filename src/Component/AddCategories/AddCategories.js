import React, {Component} from 'react';
import '../Categories/CatButtons/CatButtons'
import CatButtons from '../Categories/CatButtons/CatButtons';


class AddCategories extends Component{
    constructor(){
    super()
    this.state = {
        subCategory : {},
        rows:[]
    }
}



    updateValue = (e)=>{
        let value=this.state.subCategory[e.target.name]
    }


    render(){
            // debugger
        let rows = []
        // if(rows===[]){
        //     return []
        // }
        // console.log(this.state.subCategory, this.props.categories)
        let categoryList = Object.assign(this.props.categories.categories)
             Object.keys(categoryList).forEach((category,i)=>{
                let newArray = []
            //   console.log(category)
                newArray.push(<h1 key={i}>{category}</h1>)
            // console.log(categoryList)
                categoryList[category].forEach((subCategory,j)=>{
                    newArray.push(<CatButtons  kprop={`${j}+${i}`} fnAdd={this.props.fnAdd} fnSubtract={this.props.fnSubtract} quantity={this.props.quantity} button={subCategory.name} subCatState={this.props.subCategory} />)
                })
                rows.push(newArray)
            })
        
        console.log(rows)
        console.log(typeof this.props.getItemsFunc)
        this.props.getItemsFunc(this.state.subCategory)
        if(this.state.rows.length === 0){
            this.setState({
                rows
            })
        }
        
        return(<>
        <div className="container">
             <div className="table">
                {/* <div className="title1"> */}
                    {rows.map((row)=>
                        <div className="category-cont">
                            {row}
                        </div>
                    )}
                </div>
        </div>
                {/* </div> */}

        </>)

    }
}
export default AddCategories 





