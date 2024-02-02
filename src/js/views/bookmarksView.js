import icon from 'url:../../img/icons.svg';
import { helperView } from '../helperFunctions';

const bookmarksContainer = document.querySelector('.header .bookmarks__list');

const emptyContent = function () {
  helperView.emptyContent(bookmarksContainer);
};

// Check For Old Selected From Bookmark Container
const _checkSelected = function () {
  const selected = document.querySelector('.header .preview__link--active');
  if (selected) selected.classList.remove('preview__link--active');
};

// Mark The New Recipe As Selected On The Bookmark Container
const renderSelected = function () {
  _checkSelected();
  const id = window.location.hash;
  const newSelected = document.querySelector(`.header [href='${id}']`);
  if (newSelected) newSelected.classList.add('preview__link--active');
};

// Render Recipes In The Container
const renderBookmarks = function (recipes) {
  _checkSelected();
  helperView.emptyContent(bookmarksContainer);
  let markup;
  if (recipes && recipes.length) {
    markup = recipes
      .map(recipe => {
        return `
        <li class="preview">
          <a class="preview__link" href="#${recipe.id}">
            <figure class="preview__fig">
              <img src="${recipe.img}" alt="BookMark" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__name">
              ${recipe.name}
              </h4>
              <p class="preview__publisher">${recipe.publisher}</p>
              <div class="recipe__user-generated ${
                !recipe.key ? 'hidden' : ''
              }">
              <svg><use href="${icon}.svg#icon-user"></use></svg>
            </div>
            </div>
          </a>
        </li>
      `;
      })
      .join('');
  } else {
    markup = `
    <div class="message">
    <div>
      <svg>
        <use href="${icon}.svg#icon-smile"></use>
      </svg>
    </div>
    <p>
      No bookmarks yet. Find a nice recipe and bookmark it :)
    </p>
    </div>
    `;
  }
  bookmarksContainer.insertAdjacentHTML('afterbegin', markup);
};

export { emptyContent, renderBookmarks, renderSelected };
