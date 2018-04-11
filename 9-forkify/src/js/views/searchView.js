// Named exports for multiple objects from the module
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// export const ID = 23;

// IMPORT CUSTOM MODULES
import { elements } from "./base";

// automatically returns the search term
export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  // wrap in braces as nothing is returned
  elements.searchInput.value = "";
};
export const clearResults = () => {
  elements.searchResultList.innerHTML = "";
};

// private module function
const renderRecipe = recipe => {
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `
  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
  console.log(recipes);
  recipes.forEach(renderRecipe);
}
