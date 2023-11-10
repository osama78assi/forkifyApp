import icon from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import { helperView } from '../helperFunctions';

const recipeContainer = document.querySelector('.recipe');

const emptyContent = function() {
  helperView.emptyContent(recipeContainer);
};

const renderSpiner = function() {
  helperView.renderSpiner(recipeContainer);
};

const hideSpiner = function() {
  helperView.hideSpiner(recipeContainer);
};

const renderRecipe = function(item) {
  const markup =
  `
  <figure class="recipe__fig">
    <img src="${item.image}" alt="${item.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${item.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icon}.svg#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${item.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icon}.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${item.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg class="minus">
            <use href="${icon}.svg#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg class="plus">
            <use href="${icon}.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="recipe__user_mid">
    <div class="recipe__user-generated ${!item.key ? 'hidden' : ''}">
      <svg><use href="${icon}.svg#icon-user"></use></svg>
    </div>
    </div>
    <button class="btn--round bookmark">
      <svg class="">
        <use href="${icon}.svg#icon-bookmark"></use>
        <!-- <use href="${icon}.svg#icon-bookmark-fill"></use> -->
      </svg>
    </button>
  </div>
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${ item.ingredients.map(ing => {
        const {quantity, unit, description} = ing;
        return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icon}.svg#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${quantity ? new Fraction(quantity).toString() : ""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${unit ? unit : ""}</span>
            ${description}
          </div>
        </li>
        `;
      }).join('')
    }
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${item.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${item.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icon}.svg#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `;
  recipeContainer.insertAdjacentHTML('afterbegin', markup);
};

const renderError = function(msg) {
  helperView.renderError(recipeContainer, msg);
};

// Update Ingredients When Changing Serving
const changeServingRender = function(ingredients, newServing) {
  const servingContainer = document.querySelector('.recipe__info-data--people');
  servingContainer.innerHTML = newServing;
  const ingredientsContainer = document.querySelector('.recipe__ingredient-list');
  helperView.emptyContent(ingredientsContainer);
  const markup =
  `
    ${ ingredients.map(ing => {
        const {quantity, unit, description} = ing;
        return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icon}.svg#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${quantity ? new Fraction(quantity).toString() : ""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${unit ? unit : ""}</span>
            ${description ? description : ""}
          </div>
        </li>
        `;
      }).join('')
    }
  `;
  ingredientsContainer.insertAdjacentHTML('afterbegin', markup);
};

// Toggling Mark Button
const toggleBookmarkIcon = function(state) {
  const bookMarkBtn = document.querySelector('.bookmark');
  let markup;
  helperView.emptyContent(bookMarkBtn);
  // State Means The Item Is Found Then Show That Item As Marked
  if(!state) {
    markup =
    `
    <svg class="">
      <use href="${icon}.svg#icon-bookmark"></use>
    </svg>
    `;
  } else {
    markup =
    `
    <svg class="">
      <use href="${icon}.svg#icon-bookmark-fill"></use>
    </svg>
    `;
  }
  bookMarkBtn.insertAdjacentHTML('afterbegin', markup);
};


// Listing To The Events Clicking Either Derease Or Increase
const changeServingValue = function(increaseCallback, decreaseCallback) {
  const decrease = document.querySelector('.minus');
  const increase = document.querySelector('.plus');
  if(decrease)
    decrease.addEventListener('click', decreaseCallback);
  if(increase)
    increase.addEventListener('click', increaseCallback);
};

const addHandlerRender = function(handler) {
  const events = ['hashchange', 'load'];
  events.forEach(event => {
    window.addEventListener(event, handler);
  });
};

export {
  renderRecipe,
  renderSpiner,
  emptyContent,
  hideSpiner,
  addHandlerRender,
  renderError,
  changeServingValue,
  toggleBookmarkIcon,
  changeServingRender,
};