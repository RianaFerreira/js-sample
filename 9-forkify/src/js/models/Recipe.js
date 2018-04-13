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

  parseIngredients() {
    const unitsLong = ["tablespoons","tablespoon","teaspoons", "teaspoon","ounces","ounce","cups","pounds"];
    const unitsShort = ["tbsp","tbsp","tsp","tsp","oz","oz","cup","pound"];
    const units = [...unitsShort, "kg","g","ml"];

    const newIngredients = this.ingredients.map(el => {
      // standardise all measurement units
      let ingredient = el.toLowerCase();

      unitsLong.forEach((unit, index) => {
        ingredient = ingredient.replace(unit, units[index]);
      });

      // Remove parenthesis
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      // Parse ingredient into count, unit and ingredient name
      const arrIng = ingredient.split(" ");
      const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
      let objIng;

      if (unitIndex > -1) {
        // There is a unit e.g. 4 1/2 cups => eval("4+1/2") => 4.5 or 1 cup
        const arrCount = arrIng.slice(0, unitIndex);
        let count;

        if (arrCount.length === 1) {
          count = eval(arrIng[0].replace("-", "+"));
        } else {
          count = eval(arrIng.slice(0, unitIndex).join("+"));
        }

        objIng = {
          count,
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(unitIndex + 1).join(" ")
        };
      } else if (parseInt(arrIng[0], 10)) {
        // There is no unit but first element is a number
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: "",
          ingredient: arrIng.slice(1).join(" ")
        };
      } else if (unitIndex === -1) {
        // There is no unit
        objIng = {
          count: 1,
          unit: "",
          ingredient
        };
      }
      return objIng;
    });
    this.ingredients = newIngredients;
  }

  updateServings(type) {
    // Servings
    const newServingSize = type === "dec" ? this.servings - 1 : this.servings + 1;

    // Ingredients
    this.ingredients.forEach(ingredient => {
      ingredient.count *= (newServingSize / this.servings);
    });

    this.servings = newServingSize;
  }
}
