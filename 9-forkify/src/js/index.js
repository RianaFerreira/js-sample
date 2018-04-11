// Global app controller

// import required modules test
// import xModule from "./test";
// const x = 23;
// console.log(`I imported ${xModule} from another module! Polyfill test for const ${x}`);

import str from "./models/Search";                    // single module import
// multiple module imports with aliases
// import { add as a, multiply as m, ID } from "./views/searchView";
import * as searchView from "./views/searchView";

// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}`);
console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);

// IMPORT PACKAGE DEPENDENCIES
import axios from "axios";

async function getResults(query) {
  const apiKey = "a231ffd55f9cea917dd7ad822d233677";
  const apiURL = "http://food2fork.com/api/search";
  const corsProxy = "https://cors-anywhere.herokuapp.com/";

  try {
    const res = await axios(`${corsProxy}${apiURL}?key=${apiKey}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch(error) {
    alert(error);
  }
}
getResults("pizza");
