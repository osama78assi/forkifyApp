import * as model from './model';
import * as recipeView from './views/recipeView';
import * as searchView from './views/searchView';
import * as resultsView from './views/resultsView';
import * as paginationView from './views/paginationView';
import * as bookmarksView from './views/bookmarksView';
import * as addRecipeView from './views/addRecipeView';

import 'core-js/stable'; // Polifilling Works With Babel
import { RECIPE_PER_PAGE } from './config';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// if(module.hot) {
//   module.hot.accept();
// }


// Control Showing The Recipe
const controlRecipe = async function() {
  try {
    const id = window.location.hash;
    if(!id) // When Opening The Page If There Any Query
      return;
    // Clean
    recipeView.emptyContent();

    // Add Load Icon
    recipeView.renderSpiner();

    // Waiting Data To Fetch
    await model.loadResipe(id.slice(1));

    // Rendering Recipe
    recipeView.renderRecipe(model.state.recipe);

    // Checking Bookmark When Recipe Got Render
    // Model Function Rturn True If The Recipe Is Found
    // Bookmark View Funtion Will Take The Action
    recipeView.toggleBookmarkIcon(model.isBookmarked(id.slice(1)));

    // Mark The Recipe As Selected From The Bookmark List
    bookmarksView.renderSelected();

    // When User Mark/Unmark The Recipe
    model.addHandlerCheck(controlToggleMarkbook, id.slice(1));
    
    // Making Changing Serving Possible
    recipeView.changeServingValue(controlIncrease, controlDecrease);

    // Hide Load Icon
    recipeView.hideSpiner();

  } catch(err) {
    recipeView.hideSpiner();
    recipeView.renderError(err.message);
    console.error(err);
  }
};

// Control Increase Serving
const controlIncrease = function() {
  model.increaseServing();
  recipeView.changeServingRender(model.state.recipe.ingredients, model.state.recipe.servings);
};

// Control Decrease Serving
const controlDecrease = function() {
  model.decreaseServing();
  recipeView.changeServingRender(model.state.recipe.ingredients, model.state.recipe.servings);
}

// To Change Between Pages
const controlSearchPages = function(page = 1) {
  if(model.state.searchResult.results.length) {
    const data = model.getRecipes(page); // Get Recipes According To The Page
    // Round The Amount To Top (To Make 55 Item -> 6 Pages)
    const amount = Math.ceil(parseFloat(model.state.searchResult.results.length) / RECIPE_PER_PAGE);
    page = parseInt(page);
    resultsView.renderResults(data); // Render The Results
    paginationView.renderArrows(page - 1, page + 1, amount); // Get Left Arrow And Right Arrow
  } else {
    paginationView.renderArrows(-1, -1, -1); // Just To Rmove The Old Arrows
    resultsView.renderError('No Recipes Found !');
  }
  // Making Ablility To Show The Selected Recipe
  resultsView.addHandelrClick(resultsView.renderSelected);
};

// To Control Searching And Send Requests
const controlSearchResults = async function() {
  try {
    const query = searchView.getQuery();
    if(!query) {
      resultsView.renderError('No Recipes Found !');
      return;
    }
    // Empty Recults Content
    resultsView.emptyContent();

    // Render Loading Icon
    resultsView.renderSpiner();

    // Waiting The Results
    await model.loadSearchReults(query);

    // Hide Loading Icon
    resultsView.hideSpiner();

    // Control Pages
    controlSearchPages();
  } catch(err) {
    console.error(err);
  }
};

// Normall Function
const controlScroll = function(ele) {
  const coordinat = ele.getBoundingClientRect(); // Smooth Scroll To Specific Element
  window.scrollTo({
    left: 0,
    top: coordinat.bottom + window.scrollY,
    behavior: 'smooth',
  });
};

// Toggle Markbook Handling
const controlToggleMarkbook = function(state) {
  // Depending On The State
  // True It's Marked Then User Wants To Unmark
  // Otherwise He Wants To Mark It
  if(!state) {
    model.addBookmark(
      model.state.recipe.id,
      model.state.recipe.image,
      model.state.recipe.title,
      model.state.recipe.publisher,
      model.state.recipe.key,
    );
    bookmarksView.renderBookmarks(model.state.bookMarks);
  } else {
    model.removeBookmark(model.state.recipe.id);
    bookmarksView.renderBookmarks(model.state.bookMarks);
  }

  // Remove Or Add Select On The Recipe
  bookmarksView.renderSelected();

  // Fill Or Remove The Fill From Bookmark The Recipe
  recipeView.toggleBookmarkIcon(!state);
};

// Add Recipe Controller
const controlAddRecipe = async function(data) {
  try {
    // Render Loading Icon
    addRecipeView.renderSpiner();

    // Waiting Uploading Recipe
    await model.uploadRecipe(data);

    // Hide Spinner
    addRecipeView.hideSpinner();

    // Show Success Message
    addRecipeView.renderSuccess();

    // Hidding Form
    addRecipeView.hideForm();

    // Referesh Marked Recipes
    bookmarksView.renderBookmarks(model.state.bookMarks);

    // Render The Recipe By Changing Window Hash
    window.location.hash = model.state.recipe.id;
  } catch (err) {
    console.log(err);
    addRecipeView.renderError(err);
    // Hide Spinner
    addRecipeView.hideSpinner();
  }
}


// Will Call In The Page ( Main )
const init = function() {
  // Publisher-Scriper Pattern

  // Changing Hash
  recipeView.addHandlerRender(controlRecipe);

  // Sending Queries To The API
  searchView.addHandlerRender(controlSearchResults);

  // Fit Recipe On The Viewport
  resultsView.addHandlerScroll(controlScroll);

  // Render Elements From Local Storage
  bookmarksView.renderBookmarks(model.state.bookMarks);

  // Handle Pages Logic
  paginationView.addHandlerServing(
  function() {
    // The Next Page
    controlSearchPages(++model.state.searchResult.page);
  },
  function() {
    // The Previous Page
    controlSearchPages(--model.state.searchResult.page);
  });

  // Handle Show/Hide Add Recipe Form
  addRecipeView.addHandlerShowForm(addRecipeView.showForm);
  addRecipeView.addHandlerHideForm(addRecipeView.hideForm);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

// const html = `<div class='d'>love u</div>`;

// // Convert String To Fragment Element
// // Then We Have To Select * From The Fragment
// const ele = document.createRange().createContextualFragment(html);

// const del = document.querySelector('a').onmouseover;
// console.log(ele.querySelector('*'));

init();