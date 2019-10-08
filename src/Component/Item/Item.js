import React, { Component } from 'react'
import AddMinus from '../AddMinus/AddMinus'
import AddCategories from '../AddCategories/AddCategories'
import axios from 'axios'

//seed data 

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    async componentDidMount(){
        const catResp = await axios.get(`${window.apiHost}/recycle`);
        console.log("+++++",catResp.data);
        const preState = {categories:{}}
        const x = catResp.data.forEach((subCategory)=>{
            console.log(subCategory)
            return preState.categories[subCategory.name]= subCategory.sub_categories
        })
        console.log("+++++", preState)
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
    }
    )
    }

    quantityUpdate = (e) =>{
        this.setState({
            quantity: Number(e.target.value)
        });
        
    }

    render(){
        // console.log("#######", this.state)

            if(!this.state.categories){
              return  null
            } 

                let x = ""
                  x = Object.keys(this.state.categories).map((category)=>{
                    //   console.log(category)

                    // debugger

                      return(<>
                        <h2>{category}</h2>
                        {this.state.categories[category].map((subCategory)=>{
                            // console.log(subCategory)
                            
                            return <h3>{subCategory.name}</h3>
                        })}
                        
                    </>)
                })
            
                console.log("llll", x)

                console.log('testing')
        return (
                <div className="category-container">
                    <div>
                        {<AddCategories categories={this.state.categories} updateCount={this.updateCount} />}
                        {/* {x} */}
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



