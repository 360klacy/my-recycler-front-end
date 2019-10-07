import React, { Component } from 'react'
import AddMinus from '../AddMinus/AddMinus'
import ClickCategories from '../Categories/ClickCategories'

//seed data 

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            auto:{
                tires: 0, 
                gas: 0,
                carParts: 0,
            }
        };
    }
    componentDidMount(){
        // Call the db, ask for all the subcategories (tires, mattresses, chairs...)
        // setState and initalize state with keys of all the subcategories
        // // and all the values as 0;
        // const subcategories = ["tires", "gas", ...]

        
        // subcategories.forEach(subCategory=> {
        //     this.setState({
        //     //     subCategory: {
        //     //         tires : 0,
        //     //         carParts : 0,
        //     //         mattresses : 0,
        //     //     }
        //     // })
        // })

        // the updateCount will setState to move that count +/- for each subcategory in state
    }
     updateCount = (e) => {
         console.log('hello world')
         console.log(e.target.name)
     
        if(e.target.value === "+"){
            let val = this.state[e.target.name]
           const upper = val++
        }
        this.setState({
            
    }
    )
    }

    render(){
        // this.state.subcategories.map((subCategory) => {
        //     <SubCategory kind={"carParts"} updateCount={this.updateCount} />
        // })
        // <SubCategory type={subcategory} handleUpdate={this.updateCount} />
        // <Tires />
        // <Mattresses />
        // const putStuff = mainCategory.map((mainCat,i)=>{
        //   const otherStuff = mainCat.subCategory.map((stuff,i)=>{
        //     return(<>
        //     <li key={i} >
        //         {stuff}.....{this.state[stuff]}
        //     </li>
        //     <input onClick={this.updateCount} className="add-button" type="button"  name={stuff}value="+" />
        //     <input className="subtract-button" type="button" value="-" />
        //    </> )
        //   })
        //   return(<>
        //   <div key={i}>
        //     {mainCat.name}
        //   <ul className={mainCat.name}>
        //     {otherStuff}
        //   </ul>
        //   </div>
        //   </>)
            
        // })

        return (
                <div className="category-container">
                    <div>
                        {/* {<ClickCategories/>} */}
                        {/* {putStuff} */}
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



