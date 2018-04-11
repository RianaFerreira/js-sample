// IMPORT LIBRARY DEPENDENCIES
import axios from "axios";

// IMPORT CUSTOM CONFIGURATION
import { apiKey, corsProxy } from "../config";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    const apiURL = "http://food2fork.com/api/get";

    try {
      const res = await axios(`${corsProxy}${apiURL}?key=${apiKey}&rId=${this.id}`);
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.image = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch(error) {
      alert(error);
    }
  }

  calcTime() {
    // Assuming that we need 15min for each 3 ingredients
    const numOfIngredients = this.ingredients.length;
    const periods = Math.ceil(numOfIngredients / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }
}
