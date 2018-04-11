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
