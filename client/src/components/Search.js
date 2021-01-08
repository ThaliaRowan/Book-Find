import React, {useEffect, useState} from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Result from "./Result";

function Search(){

  
const [searchState, setSeachState] = useState({ 
  search: "The Dead Zone",
  title: "",
  author: "",
  description: "",
  image: "",
  url: ""


});


useEffect(() => {
  
  API.searchTerms(searchState.search)
    .then(res => {
      console.log(res.data.items[0].volumeInfo)

      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
     
      setSeachState({
        title: res.data.items[0].volumeInfo.title,
        author: res.data.items[0].volumeInfo.authors[0],
        description: res.data.items[0].volumeInfo.description,
        image: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
        url:res.data.items[0].volumeInfo.canonicalVolumeLink
    })
  })
    .catch(err => setSeachState({ error: err.message }));
}, [])


const handleInputChange = event => {
  setSeachState({ search: event.target.value });
};

const handleFormSubmit = event => {
  event.preventDefault();
  if (!searchState.search) {
    return;
  }
  API.searchTerms(searchState.search)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setSeachState({
        title: res.data.items[0].volumeInfo.title,
        author: res.data.items[0].volumeInfo.authors[0],
        description: res.data.items[0].volumeInfo.description,
        image: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
        url:res.data.items[0].volumeInfo.canonicalVolumeLink
      });
    })
    .catch(err => setSeachState({ error: err.message }));
};
return(
  <div>
       <SearchForm
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      results={searchState.search}
    />
    <Result
      title={searchState.title}
      author={searchState.author}
      description={searchState.description}
      image={searchState.image}
      url={searchState.url}
    />

  </div>
);

}

export default Search;