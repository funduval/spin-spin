import React, { Component } from 'react';


const AnimStyle = {
    transition: 'top 2.5s ease-out',
  };

export default class SearchDspl extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log('prpos indise of searchDspl: ', this.props)
        return (
            <div className="resultWell" 
                style = {{ ...AnimStyle, top: this.props.top }}>
                <div className="resutTitle">
                    <h1>Search Results</h1>
                </div>
                
                <div>
                { this.props.foodType ? (
                    <ul>
                        { this.props.foodType.map(foodItem => {
                            var { item_name, brand_name, nf_sugar, nf_serving_size_qty } = foodItem.fields
                                return  <li key={foodItem._id}>
                                            <h2 className="foodItem"><strong>{ foodItem.fields.brand_name }</strong> { foodItem.fields.item_name }</h2>
                                            <div className="foodStat">
                                                <h2>serving size: { foodItem.fields.nf_serving_size_qty }  {  }
                                                  |  sugars: { foodItem.fields.nf_sugars } <span>g</span></h2>
                                            </div>
                                        </li>
                        }
                        )}
                    </ul>
                ) : (
                    <h3>No Results to Display</h3>
                    )}
                </div>  
                <div>
                    
                </div> 
            </div>
        )
    }
}