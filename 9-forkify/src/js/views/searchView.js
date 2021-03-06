// Named exports for multiple objects from the module
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// export const ID = 23;

// IMPORT CUSTOM MODULES
import { elements } from "./base";

// PRIVATE MODULE FUNCTIONS
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

//  type: 'prev' or 'next'
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
      <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
      <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === "prev" ? "left" : "right"}"></use>
      </svg>
    </button>
  `;

const renderButtons = (page, numResults, resultsPerPage) => {
  const pages = Math.ceil(numResults / resultsPerPage);
  let button;

  if (page === 1 && pages > 1) {
    // only next button
    button = createButton(page, "next");
  } else if (page < pages) {
    // both buttons
    button = `
      ${createButton(page, "prev")}
      ${createButton(page, "next")}
    `
  } else if (page === pages && pages > 1) {
    // only prev button
    button = createButton(page, "prev");
  }

  elements.searchResultPages.insertAdjacentHTML('afterbegin', button);
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
  elements.searchResultPages.innerHTML = "";
};
export const highlightSelected = id => {
  const resultsArr = Array.from(document.querySelectorAll(".results__link"));
  resultsArr.forEach(el => {
    el.classList.remove("results__link--active");
  });
  document.querySelector(`.results__link[href="#${id}"]`).classList.add("results__link--active");
};

export const limitRecipeTitle = (title, limit = 17) => {
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

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;

  recipes.slice(start, end).forEach(renderRecipe);
  renderButtons(page, recipes.length, resultsPerPage);
}
