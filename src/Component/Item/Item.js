import React, { Component } from 'react'
import AddCategories from '../AddCategories/AddCategories'
import axios from 'axios'

//seed data 

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            subCatItems: {}
        };
    }
    async componentDidMount(){
        const catResp = await axios.get(`${window.apiHost}/recycle`);
        // console.log("+++++",catResp.data);
        const preState = {categories:{}}
        catResp.data.forEach((subCategory)=>{
            return preState.categories[subCategory.name]= subCategory.sub_categories
        })
        this.setState({
            ...preState
        })


        // Call the db, ask for all the subcategories (tires, mattresses, chairs...)
        // setState and initalize state with keys of all the subcategories
        // // and all the values as 0;
        // const subcategories = ["tires", "gas", ...]


    }
     updateCount = (e) => {
        //  console.log('hello world')
        //  console.log(e.target.name)
     
        if(e.target.value === "+"){
            let val = this.state[e.target.name]
           const upper = val++
        }
        this.setState({
            tires: 0
      })
    }

    quantityUpdate = (e) =>{
        this.setState({
            quantity: Number(e.target.value)
        });
        
    }

    getItems = (items)=>{
        if(items !== this.state.subCatItems){
            this.setState({
                subCatItems: items
            })
        }
        console.log(typeof this.props.getItemsFunc)
        this.props.getItemsFunc(items)
    }

    render(){
        // console.log("#######", this.state)

            if(!this.state.categories){
              return  <div>Loading</div>
            } 

            return (
                <div className="category-container">
                    <div>
                        {<AddCategories getItemsFunc={this.getItems} categories={this.state.categories} updateCount={this.updateCount} />}
                    </div>
                </div>

        )
}
}


export default Item






// function SubCategory(props){
//     return(
//         <div>
//             <h2>{props.kind}</h2>
//             <button onClick={props.updateCount}>+</button>
//             <button onClick={props.updateCount}>-</button>
//         </div>
//     )
// }

// class SubCategory extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>{this.props.kind}</h2>
//                 <button onClick={this.props.updateCount}>+</button>
//                 <button onClick={this.props.updateCount}>-</button>
//             </div>
//         )
//     }
// }



