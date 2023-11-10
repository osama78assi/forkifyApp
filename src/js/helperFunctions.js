import icon from 'url:../img/icons.svg';
import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config";

// Model Function

class ModelHelper {
  // To Make Limit Time Per Request
  _timeout (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  // Get JSON Resopnse From An API
  async getJSON(url) {
    try {
      const res = await Promise.race([fetch(url), this._timeout(TIMEOUT_SEC)]);
      const data = await res.json();
      if(!res.ok)
        throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch(err) {
      throw err;
    }
  }
  // Send JSON Data To The API
  async sendJSON(url, uploadData) {
    try {
      const req = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      });
      const res = await Promise.race([req, this._timeout(TIMEOUT_SEC)]);
      const data = await res.json();
      if(!res.ok)
        throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch(err) {
      throw err;
    }
  }

  // Formating The Object
  format(object, jsNotaion = true) {
    if(jsNotaion) {
      return {
        id: object.id,
        title: object.title,
        publisher: object.publisher,
        sourceUrl: object.source_url,
        image: object.image_url,
        servings: object.servings,
        cookingTime: object.cooking_time,
        ingredients: object.ingredients,
        ...(object.key && {key: object.key})
      }
    }
    return {
      title: object.title,
      publisher: object.publisher,
      source_url: object.sourceUrl,
      image_url: object.image,
      servings: +object.servings,
      cooking_time: +object.cookingTime,
      ingredients: object.ingredients,
    }
  }
}

// Views Functions

class ViewHelper {
  // To Empty The Content
  emptyContent(parent) {
    if(parent.childElementCount != 0)
      parent.innerHTML = "";
  }
  // To Render Loading Icon
  renderSpiner(parent) {
    const markup =
    `
    <div class="spinner">
      <svg>
        <use href="${icon}.svg#icon-loader"></use>
      </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', markup);
  }
  // To Hide Loading Icon
  hideSpiner(parent) {
    const spiner = parent.querySelector('.spinner');
    if(spiner) {
      spiner.remove();
    }
  }
  // To Render Specific Error
  renderError(parent, msg) {
    if(msg.includes('Invalid _id'))
      msg = `Couldn't Find The Recipe. Please try again!`;
    const markup =
    `
    <div class="error">
      <div>
        <svg>
          <use href="${icon}.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${msg}</p>
    </div>
    `;
    this.emptyContent(parent);
    parent.insertAdjacentHTML('afterbegin', markup);
  }
}

const helperView = new ViewHelper();
const helperModel = new ModelHelper();


export {
  helperView,
  helperModel,
};