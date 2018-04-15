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
import List from "./models/List";

// VIEWS
import * as searchView from "./views/searchView";       // multiple module import
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";

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
  // callback function with delegation
  // the pagination links may not exist on the page when it is loaded
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
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Highight selected search item
    if (state.search) searchView.highlightSelected(id);

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
      await state.recipe.getRecipe();   // returns a promise
      state.recipe.parseIngredients();

      // Calc servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch(error) {
      clearLoader();
      alert(error);
    }
  }
};

// Add the same event listener to multiple events
["hashchange","load"].forEach(event => window.addEventListener(event, controlRecipe));
// DRY up this code:
// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);

const controlList = () => {
  // Create a new list if there aren't any yet
  if (!state.list) state.list = new List();

  // Add each recipe ingredient to the list and UI
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// EVENT DELEGATION
// + and - buttons aren't displayed yet when the page loads
elements.recipe.addEventListener("click", e => {
  if (event.target.matches(".btn-decrease, .btn-decrease *")) {
    // decrease servings clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingIngredients(state.recipe);
    }
  } else if (event.target.matches(".btn-increase, .btn-increase *")) {
    // increase servings clicked
    state.recipe.updateServings("inc");
    recipeView.updateServingIngredients(state.recipe);
  } else if (event.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
    controlList();
  }
});

// test new List model in browser console
window.l = new List();
// $l --> new list object
// $l.addItem(2, 'tbsp', 'salt');
// $l.updateCount('jf9j7kld', 10);
// $l.deleteItem('jf9j7kld');
