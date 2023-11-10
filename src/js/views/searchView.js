const queryContainer = document.querySelector('.search .search__field');
const queryBtn = document.querySelector('.search .search__btn');

const getQuery = function() {
  const query = queryContainer.value;
  queryContainer.value = "";
  return query;
};

const addHandlerRender = function(callback) {
  queryBtn.addEventListener('click', function(e) {
    e.preventDefault();
    callback();
  });
};

export {
  getQuery,
  addHandlerRender
}