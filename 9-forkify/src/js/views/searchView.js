// Named exports for multiple objects from the module
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// export const ID = 23;

// IMPORT CUSTOM MODULES
import { elements } from "./base";

// PRIVATE MODULE FUNCTIONS
const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];

  if (title.length > limit) {
    title.split(" ").reduce((accumulator, current) => {
      if (accumulator + current.length <= limit) {
        newTitle.push(current);
      }
      return accumulator + current.length;
    }, 0);
    return `${newTitle.join(" ")} ...`;
  }

  return title;  // only have one return statement per function
};
/* Reduce method example: "Pasta with tomato and herbs"
 * acc 0: acc + cur.length => 5 / newTitle = ["Pasta"]
 * acc 5: acc + cur.length => 9 / newTitle = ["Pasta","with"]
 * acc 9: acc + cur.length => 15 / newTitle = ["Pasta","with","tomato"]
 * acc 15: acc + cur.length => 18 / newTitle = ["Pasta","with","tomato"]
 * acc 18: acc + cur.length => 24 / newTitle = ["Pasta","with","tomato"]
 */

const renderRecipe = recipe => {
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `
  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};


// PUBLIC MODULE FUNCTIONS
// automatically returns the search term
export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  // wrap in braces as nothing is returned
  elements.searchInput.value = "";
};
export const clearResults = () => {
  elements.searchResultList.innerHTML = "";
};
export const renderResults = recipes => {
  console.log(recipes);
  recipes.forEach(renderRecipe);
}
