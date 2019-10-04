import React, {Component} from 'react';
import './Home.css';
import Categories from '../Categories';


class Home extends Component{
    render(){
        return(<>
            <div className='container-fluid'>
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <h1>Yall Good?</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="category col s12">
                        <Categories />
                    </div>
                </div>
            </div>
            
            </>
        )
    }

}


export default Home;
