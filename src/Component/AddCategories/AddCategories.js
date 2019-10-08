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

componentDidMount(){
    let tmpStateObj = Object.assign(this.state.subCategory)
    Object.keys(this.props.categories).forEach((category,i)=>{
        //   console.log(category)
        this.props.categories[category].forEach((subCategory,j)=>{
            tmpStateObj[subCategory.name] = 0
        })
        // console.log(newRows)
        })
    console.log(this.state)
    }
    addBtn =  (e)=>{
        let newState = Object.assign(this.state.subCategory)
        let subCatVal = e.target.name
        console.log(newState)
        newState[subCatVal]++        
        this.setState({
            subCategory: newState
        })
    }  
    subtractBtn =  (e)=>{
        let newState = Object.assign(this.state.subCategory)
        let subCatVal = e.target.name
        console.log(newState)
        newState[subCatVal]--      
        this.setState({
            subCategory: newState
        })
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
        console.log(this.state.subCategory, this.props.categories)
        if(this.state.subCategory !== {}){
             Object.keys(this.props.categories).forEach((category,i)=>{
                let newArray = []
            //   console.log(category)
                newArray.push(<h1 key={i}>{category}</h1>)
            // console.log(category)
                this.props.categories[category].forEach((subCategory,j)=>{
                    newArray.push(<CatButtons  kprop={`${j}+${i}`} fnAdd={this.addBtn} fnSubtract={this.subtractBtn} quantity={this.state.subCategory}button={subCategory.name} subCatState={this.state.subCategory} />)
                })
                rows.push(newArray)
            })
        }
        console.log(rows)
       this.props.getItemsFunc(this.state.subCategory)
        if(this.state.rows.length === 0){
            this.setState({
                rows
            })
        }
        
        return(<>
             <div className="table">
                <div className="title1">
                    {rows.map((row)=>
                        <div className="category-cont">
                            {row}
                        </div>
                    )}
                </div>
                </div>

        </>)

    }
}
export default AddCategories 