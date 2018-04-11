// Global app controller

// import required modules test
// import xModule from "./test";
// const x = 23;
// console.log(`I imported ${xModule} from another module! Polyfill test for const ${x}`);

import str from "./models/Search";                    // single module import
// import { add as a, multiply as m, ID } from "./views/searchView";   // multiple module imports with aliases
import * as searchView from "./views/searchView";

// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}`);
console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);
