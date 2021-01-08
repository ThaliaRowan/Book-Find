import React from "react";

function SearchForm(props){
    return(
        <div>
            
        <div className="input-group mb-3">
        <input type="text" 
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        className="form-control" placeholder="Name of Book" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" onClick={props.handleFormSubmit}  type="button" id="button-addon2">Search Book</button>
        </div>

        </div>
    );
}

export default SearchForm;