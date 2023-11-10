import { helperView } from "../helperFunctions";

const overlay = document.querySelector('.overlay');
const addForm = document.querySelector('.add-recipe-window');
const showFormBtn = document.querySelector('.nav__btn--add-recipe');
const hideFormBtn = document.querySelector('.add-recipe-window .btn--close-modal');
const form = document.querySelector('.upload');
const formError = document.querySelector('.warning');
const fromErrorTitle = document.querySelector('.warning-title');
const formErrorDesc = document.querySelector('.warning .warning-desc');

const _waiter = function() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  });
};

const renderSpiner = function() {
  helperView.renderSpiner(addForm);
}

const hideSpinner = function() {
  helperView.hideSpiner(addForm);
}

// Success Uploading Recipe Message
const renderSuccess = function() {
  formError.classList.remove('hidden');
  formError.classList.add('success');
  fromErrorTitle.innerHTML = 'Recipe Uploaded Successfully !';
  _waiter().then(() => {
    formError.classList.add('hidden');
    // Wait 2 Seconds Before Removing Success Class
    _waiter().then(() => {
      formError.classList.remove('success');
    });
  });
}

const renderError = function(reason) {
  fromErrorTitle.innerHTML = 'Something Went Wrong !';
  formErrorDesc.innerHTML = `• ${reason}`;
  formError.classList.remove('hidden');
  _waiter().then(() => {
    formError.classList.add('hidden');
  });
};

const _checkInputs = function(data) {
  // Filltering Ingredient
  const ingredients = [];
  const ingredientsObject = [];
  data.forEach((ing) => {
    if(ing[0].includes('ingredient') &&ing[1] != '') {
      ingredients.push(ing[1].split(','));
    }
  });

  // Title Must Be 5 Characters At Least
  if(data[0][1].length < 5) {
    renderError('Title Must Be 5 Characters At Least');
    return 0;
  }

  // Source URL Must Be 5 Characters At Least
  if(data[1][1].length < 5) {
    renderError('Source URL Must Be 5 Characters At Least');
    return 0;
  }

  // Image URL Must Be 5 Characters At Least
  if(data[2][1].length < 5) {
    renderError('Image URL Must Be 5 Characters At Least');
    return 0;
  }

  // Publisher Name Must Be 5 Characters At Least
  if(data[3][1].length < 5) {
    renderError('Publisher Name Must Be 5 Characters At Least');
    return 0;
  }

  // Servenig Must Be 1 At Least
  if(Number(data[5][1]) <= 0) {
    renderError('Empty Serving For Recipe Isn\'t Accepted !');
    return 0;
  }

  // Cooking Time Might Be 0 But Not -1 Or Less
  if(Number(data[4][1]) < 0) {
    renderError('Cooking Time Mustn\'t Be Negative');
    return 0;
  }

  for(let i = 0; i < ingredients.length; i++) {
    // Mustn't Add Three Empty Commas
    if(ingredients[i].every((element) => element == '')) {
      renderError(`Ingredient ${i+1} Mustn't Be Empty`);
      return 0;
    }

    // Must Be From Three Things
    if(ingredients[i].length > 3 || ingredients[i].length < 3) {
      renderError(`Ingredient ${i+1} Must Be Like The Format: Quantity, Unit, Description`);
      return 0;
    }

    // The Quantity Mustn't Be String
    if (Number(ingredients[i][0]) != 0 && isNaN(ingredients[i][0])) {
      renderError(`Quantity Of Ingredient ${i+1} Must Be Number`);
      return 0;
    }

    // Quantity Must Hold Meaningful Value
    if((ingredients[i][1] == '' && ingredients[i][2] == '') || ingredients[i][1] && ingredients[i][2] == '') {
      renderError(`Quantity Of Ingredient ${i+1} Must Hold Meaningful Value`);
      return 0;
    }

    // In Success Make The Ingredient Object
    ingredientsObject.push({
      quantity: ingredients[i][0] ? +ingredients[i][0] : null,
      unit: ingredients[i][1].trim() != "" ? ingredients[i][1].trim() : null,
      description: ingredients[i][2].trim() != "" ? ingredients[i][2].trim() : null,
    })
  }
  return ingredientsObject;
};

const showForm = function() {
  overlay.classList.remove('hidden');
  addForm.classList.remove('hidden');
};

const hideForm = function() {
  overlay.classList.add('hidden');
  addForm.classList.add('hidden');
};

const addHandlerShowForm = function(callback) {
  showFormBtn.addEventListener('click', callback);
};

const addHandlerHideForm = function(callback) {
  overlay.addEventListener('click', function(e) {
    if(!overlay.classList.contains('hidden')) {
      callback();
    }
  });
  hideFormBtn.addEventListener('click', callback);
};

const addHandlerUpload = function(callback) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let data = [... new FormData(form)];
    
    // Return Nicly Structured Ingredients
    const clear = _checkInputs(data);
    if(clear) {
      data = data.slice(0, 6);
      data.push(['ingredients', clear]);

      // Data Must Be Excatly Like Data That Comes From The API
      callback(Object.fromEntries(data));
    }
  });
}

export {
  showForm,
  hideForm,
  addHandlerShowForm,
  addHandlerHideForm,
  addHandlerUpload,
  renderError,
  renderSuccess,
  renderSpiner,
  hideSpinner,
};