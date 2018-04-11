// IMPORT LIBRARY DEPENDENCIES
import axios from "axios";

// IMPORT CUSOTM CONFIGURATION
import { apiKey, corsProxy } from "../config";

// Export a single object from the module
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const apiURL = "http://food2fork.com/api/search";

    try {
      const res = await axios(`${corsProxy}${apiURL}?key=${apiKey}&q=${this.query}`);
      this.result = res.data.recipes;
    } catch(error) {
      alert(error);
    }
  }
}
