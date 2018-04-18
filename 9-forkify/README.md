## MVC architecture

### Model and View setup
* Using ES6 modules.
* Default and named exports and imports.
* Aliased module imports.
* Importing specific or all modules.

### API integration
* 3rd party API http://food2fork.com/about/api
* API key usage example
* axios library for external api requests instead of the jquery fetch function
* CORS Proxy https://crossorigin.me/ or https://cors-anywhere.herokuapp.com/

### Data models
* ES6 classes for every data model.

### State management
* Store controllers in **index.js**
* Manage application state in a central location, similar to Redux state management.
* Event listener for form submission.
* Asynchronous search behaviour from controller.

### Display of search results
* Advance DOM manipulation.
* ES6 template strings for HTML component rendering.
* Display a loading spinner.

### Paginate search results
* `.closest` method for event handling
* `data-*` attributes in HTML5
* event delegation

### Display a selected recipe
* Read data from page URL.
* Respond to hash change event.
* Add same event listener to multiple events.
* Array methods: `map`, `slice`, `findIndex`, and `includes`
* `eval()` function usage.

### Event delegation
* `.matches` function
* Array.slice vs Array.spice
* Array.findIndex and Array.find examples

### Local storage of data
* localStorage API
* Set, get and delete local storage items.
* Browser console testing. localStorage data persists throughout page loads.
```
> localStorage.setItem("key", "value")
> localStorage.getItem("key")
> localStorage
> localStorage.length
> localStorage.removeItem("key")
```

### External library dependencies
* Improve display of recipe ingredient units https://github.com/infusion/Fraction.js/
```
$ npm install fractional --save
```
* Unique ids for recipes https://github.com/adamhalasz/uniqid
```
$ npm install uniqid --save
```
