// Global app controller

// import required modules test
// import xModule from "./test";
// const x = 23;
// console.log(`I imported ${xModule} from another module! Polyfill test for const ${x}`);

// multiple module imports with aliases
// import { add as a, multiply as m, ID } from "./views/searchView";
// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}`);
// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}.`);

// MODELS
import Search from "./models/Search";                   // single module import
import Recipe from "./models/Recipe";

// VIEWS
import * as searchView from "./views/searchView";       // multiple module import

// HELPERS
import { elements, renderLoader, clearLoader, renderButtons } from "./views/base";

/* Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};


// SEARCH CONTROLLER
const controlSearch = async () => {
  // get query from view element
  const query = searchView.getInput();

  if (query) {
    // create and add new search object to state
    state.search = new Search(query);

    // prepare UI for display of results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchResults);

    try {
      // search for recipes
      await state.search.getResults();  // returns a promise

      // render results in UI
      console.log(state.search.result);
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch(error) {
      clearLoader();
      alert(error);
    }
  }
}

elements.searchForm.addEventListener("submit", e => {
  // callback function
  e.preventDefault();
  controlSearch();
});

elements.searchResultPages.addEventListener("click", e => {
  // callback function
  const btn = e.target.closest(".btn-inline");

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

// RECIPE CONTROLLER
const controlRecipe = async () => {
  // Get resource id from the URL
  // URL = window.location
  // resource #id = window.location.hash
  const id = window.location.hash.replace("#", "");

  if (id) {
    //  Prepare UI to display the clicked recipe

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data
      await state.recipe.getRecipe();   // returns a promise

      // Calc servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      console.log(state.recipe);
    } catch(error) {
      alert(error);
    }
  }
  console.log(id);
};

// Add the same event listener to multiple events
["hashchange","load"].forEach(event => window.addEventListener(event, controlRecipe));
// DRY up this code:
// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);
