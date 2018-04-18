// Named exports
// Object that contains all elements we need to manipulate in the DOM
export const elements = {
  searchForm: document.querySelector(".search"),
  searchInput: document.querySelector(".search__field"),
  searchResults: document.querySelector(".results"),
  searchResultList: document.querySelector(".results__list"),
  searchResultPages: document.querySelector(".results__pages"),
  recipe: document.querySelector(".recipe"),
  shoppingList: document.querySelector(".shopping__list"),
  likeMenu: document.querySelector(".likes__field"),
  likeList: document.querySelector(".likes__list")
};

export const elementStrings = {
  loader: 'loader'
};

export const renderLoader = parentElement => {
  const loader = `
    <div class="${elementStrings.loader}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;
  parentElement.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
