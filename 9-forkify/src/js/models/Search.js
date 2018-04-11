// IMPORT LIBRARY DEPENDENCIES
import axios from "axios";

// Export a single object from the module
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const apiKey = "a231ffd55f9cea917dd7ad822d233677";
    const apiURL = "http://food2fork.com/api/search";
    const corsProxy = "https://cors-anywhere.herokuapp.com/";

    try {
      const res = await axios(`${corsProxy}${apiURL}?key=${apiKey}&q=${this.query}`);
      this.result = res.data.recipes;
      console.log(this.result);
    } catch(error) {
      alert(error);
    }
  }
}
