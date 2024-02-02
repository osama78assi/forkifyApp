import icon from 'url:../../img/icons.svg';
import { helperView } from '../helperFunctions';

const arrowContainer = document.querySelector('.pagination');

const emptyContent = function () {
  helperView.emptyContent(resultsContainer);
};

// Render Pagination Arrows In The Page
const renderArrows = function (start, end, amount) {
  if (start == -1) {
    // Just Clear Old Arrows From The Page
    helperView.emptyContent(arrowContainer);
    return;
  }
  let leftArrow = (rightArrow = '');
  if (start != 0) {
    leftArrow = `
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icon}.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${start}</span>
    </button>
    `;
  }
  if (end <= amount) {
    rightArrow = `
    <button class="btn--inline pagination__btn--next">
      <span>Page ${end}</span>
        <svg class="search__icon">
      <use href="${icon}.svg#icon-arrow-right"></use>
      </svg>
    </button>
    `;
  }
  const markup = leftArrow + rightArrow;
  helperView.emptyContent(arrowContainer);
  arrowContainer.insertAdjacentHTML('afterbegin', markup);
};

// Making Serving Possible
const addHandlerServing = function (next, prev) {
  arrowContainer.addEventListener('click', function (e) {
    if (e.target.closest('.pagination__btn--next')) {
      next();
    } else if (e.target.closest('.pagination__btn--prev')) {
      prev();
    }
  });
};

export { emptyContent, renderArrows, addHandlerServing };
