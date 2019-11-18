import React from "react";
import { connect } from "react-redux";
import { searchAction} from "../actions/searchAction";
import { displayProducts } from "../api";

class SearchBox extends React.Component {
    
  render() {
    return (
        <div className="container">
          <div className="input-group mb-3">
          {/* <span class="fa fa-search form-control-feedback"></span> */}

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search For Products"
              id="productName"
              onChange={this.props.doSearch}
            />
           </div>
        </div>
      
    );
  }
}

function mapActionToProps(dispatch) {
  return {
    
    doSearch: function(event) {
      event.preventDefault();
      let searchText=document.getElementById('productName').value;
      console.log(searchText);
      dispatch(searchAction(searchText));
    }
  };
}

export default connect(
  null,
  mapActionToProps
)(SearchBox);

