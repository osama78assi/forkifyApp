import icon from 'url:../../img/icons.svg';
import { helperView } from '../helperFunctions';

const resultsContainer = document.querySelector('.results');

const emptyContent = function () {
  helperView.emptyContent(resultsContainer);
};

const renderSpiner = function () {
  helperView.renderSpiner(resultsContainer);
};

const hideSpiner = function () {
  helperView.hideSpiner(resultsContainer);
};

const renderError = function (msg) {
  helperView.renderError(resultsContainer, msg);
};

// Check For Old Selected Recipe From The Results Container
const _checkOldSelected = function () {
  const oldOne = document.querySelector(
    '.search-results .preview__link--active'
  );
  if (oldOne) oldOne.classList.remove('preview__link--active');
};

// Render The Cliked Recipe As Selected One
const renderSelected = function (newOne) {
  _checkOldSelected();
  if (newOne) newOne.classList.add('preview__link--active');
};

// Render The Result On The Page
const renderResults = function (data) {
  const markup = data
    .map(ele => {
      return `
    <li class="preview search-preview">
      <a class="preview__link ${
        ele.id == window.location.hash.slice(1) ? 'preview__link--active' : ''
      }" href="#${ele.id}">
        <figure class="preview__fig">
          <img src="${ele.image}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__name">
            ${ele.title}
          </h4>
          <p class="preview__publisher">${ele.publisher}</p> 
          <div class="preview__user-generated ${!ele.key ? 'hidden' : ''}">
            <svg>
              <use href="${icon}.svg#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `;
    })
    .join('');
  emptyContent();
  resultsContainer.insertAdjacentHTML('afterbegin', markup);
};

// To Handle Scroll To The Top Of Recipe When Clicking On It
const addHandlerScroll = function (callback) {
  const header = document.querySelector('.header');
  const elementsContainer = document.querySelector('.results');
  elementsContainer.addEventListener('click', callback.bind(null, header));
};

// Handle Selected Recipes When Clicking On One
const addHandelrClick = function (callback) {
  resultsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('a');
    if (clicked) callback(clicked);
  });
};

export {
  emptyContent,
  renderSpiner,
  hideSpiner,
  renderError,
  renderSelected,
  renderResults,
  addHandelrClick,
  addHandlerScroll,
};
