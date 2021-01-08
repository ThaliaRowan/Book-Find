import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchTerms: function(book) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q="+book+"&key=AIzaSyAmARrRqfLbHrDeoVtjOkoN-hO2tNVMaSM"
    );
  }
};