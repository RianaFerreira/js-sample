// Global app controller

// import required modules test
// import xModule from "./test";
// const x = 23;
// console.log(`I imported ${xModule} from another module! Polyfill test for const ${x}`);

// multiple module imports with aliases
// import { add as a, multiply as m, ID } from "./views/searchView";
// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}`);
// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}.`);

import Search from "./models/Search";                   // single module import
import * as searchView from "./views/searchView";       // multiple module import
import { elements, renderLoader, clearLoader } from "./views/base";

/* Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

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

    // search for recipes
    await state.search.getResults();

    // render results in UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
}

elements.searchForm.addEventListener("submit", e => {
  // callback function
  e.preventDefault();
  controlSearch();
})
