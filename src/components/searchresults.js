import React from "react";
import { connect } from "react-redux";
import { displayProducts } from "../api";
import { displayingProducts } from "../actions/displayAction";
import Card from "./card";

class SearchResults extends React.Component {

    componentDidMount() {
        this.props.getProductsList();
    }

    render() {
        return (
            <div className="container">
                <ul className="row">

                    {this.props.products && this.props.products.map((item, i) =>

                        <Card item={item} index={i} />

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
            products: products.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
        };
    }
    else {
        return {
            products: products
        };
    }

}

function mapActionToProps(dispatch) {
    return {
        getProductsList: function () {
            displayProducts().then(result => dispatch(displayingProducts(result)));
        }
    }

}

export default connect(mapStateToProps, mapActionToProps)(SearchResults);