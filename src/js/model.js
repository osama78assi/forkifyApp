import { async } from 'regenerator-runtime';
import { API_URL, API_KEY, RECIPE_PER_PAGE } from './config';
import { helperModel } from './helperFunctions';

const state = {
  recipe: {},
  searchResult: {
    query: '',
    results: [],
    page: 1,
  },
  bookMarks: [],
};

const loadResipe = async function (id) {
  try {
    const data = await helperModel.getJSON(`${API_URL}/${id}`);
    const { recipe } = data.data;
    state.recipe = helperModel.format(recipe);
  } catch (err) {
    throw err;
  }
};

const loadSearchReults = async function (query) {
  state.searchResult.query = '';
  state.searchResult.page = 1;
  state.searchResult.results = [];
  try {
    const data = await helperModel.getJSON(
      `${API_URL}?search=${query}&key=${API_KEY}`
    );
    state.searchResult.query = query;
    state.searchResult.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
  } catch (err) {
    throw err;
  }
};

const getRecipes = function (page = 1) {
  state.searchResult.page = page;
  const start = (page - 1) * RECIPE_PER_PAGE;
  const end = page * RECIPE_PER_PAGE;
  return state.searchResult.results.slice(start, end);
};

// Decrease The Serving
const decreaseServing = function () {
  if (state.recipe.servings > 1) {
    state.recipe.ingredients.forEach(ing => {
      ing.quantity =
        (ing.quantity * (state.recipe.servings - 1)) / state.recipe.servings;
    });
    state.recipe.servings--;
  }
};

// Increase The Serving
const increaseServing = function () {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity =
      (ing.quantity * (state.recipe.servings + 1)) / state.recipe.servings;
  });
  state.recipe.servings++;
};

// Check For Specific Recipe If Found
const isBookmarked = function (id) {
  if (state.bookMarks.length) {
    const indexOfRecipe = state.bookMarks.findIndex(recipe => recipe.id == id);
    if (indexOfRecipe != -1) return true;
    return false;
  }
  return false;
};

// Add Recipe To Local Storage
const addBookmark = function (id, img, name, publisher, key = false) {
  state.bookMarks.push({
    id: id,
    img: img,
    name: name,
    publisher: publisher,
    ...(key && { key: key }),
  });
  window.localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
};

// Remove A Certain Recipe From Bookmark
const removeBookmark = function (id) {
  const indexOfRecipe = state.bookMarks.findIndex(recipe => recipe.id == id);
  state.bookMarks.splice(indexOfRecipe, 1);
  // Referesh The List
  window.localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
};

// Handle When User Click On The Mark/Unmark Recipe
const addHandlerCheck = function (callback, id) {
  const bookMarkBtn = document.querySelector('.bookmark');
  bookMarkBtn.addEventListener('click', function () {
    callback(isBookmarked(id));
  });
};

// Handle Uploading A Recipe
const uploadRecipe = async function (newRcipe) {
  try {
    newRcipe = helperModel.format(newRcipe, false);
    const data = await helperModel.sendJSON(
      `${API_URL}?key=${API_KEY}`,
      newRcipe
    );
    state.recipe = helperModel.format(data.data.recipe);
    addBookmark(
      state.recipe.id,
      state.recipe.image,
      state.recipe.title,
      state.recipe.publisher,
      state.recipe.key
    );
  } catch (err) {
    throw err;
  }
};

// Check Bookmarks From The Start
const init = function () {
  if (window.localStorage.getItem('bookmarks')) {
    state.bookMarks = JSON.parse(window.localStorage.getItem('bookmarks'));
  } else {
    window.localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
  }
};

init();

export {
  state,
  loadResipe,
  loadSearchReults,
  getRecipes,
  decreaseServing,
  increaseServing,
  isBookmarked,
  addBookmark,
  removeBookmark,
  addHandlerCheck,
  uploadRecipe,
};
