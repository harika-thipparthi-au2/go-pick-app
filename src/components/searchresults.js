import React from "react";
import {connect} from "react-redux";
import { displayProducts } from "../api";
import { displayingProducts } from "../actions/displayAction";

class SearchResults extends React.Component{
    
    componentDidMount(){
        this.props.getProductsList();
    }

    render(){
        return(
            <div className="container">
                <ul className="row">
                   
                { this.props.filteredProducts && this.props.filteredProducts.map((item,i)=>
                 <div className="col-md-4 p-3 my-1">
                     <li key={i.toString()} className="card">
                         <img className="card-img-top p-3" style={{"width":"130px","height":"150px","margin":"0 auto"}} src={item.img_src}/>
                         <div className="card-body">
                     <h6 className="card-title">{item.name}</h6>
                   <span className="card-text text-muted">{item.reviews}</span> 
                    </div>
                    </li>
                    </div>

                    )}
          </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { products, searchText } = state.searchReducer;
    if (searchText) {
        return {
            filteredProducts: products.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
        };
    }
    else {
        return {
            filteredProducts: products
        };
    }

}

function mapActionToProps(dispatch){
    return{
        getProductsList:function(){
            displayProducts().then(result=>dispatch(displayingProducts(result)));
        }
    }
      
}

export default connect(mapStateToProps,mapActionToProps)(SearchResults);