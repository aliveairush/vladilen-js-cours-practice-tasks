// TASK 1. 🚩 Rewrite using async/await

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;

// Initial data to rewrite
const createNewPost = () => {
  isLoading = true;
  fetch(POSTS_URL, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('result', result)
    })
    .catch((error) => {
      console.log('error', error)
    })
    .finally(() => {
      isLoading = false;
    });
};
createNewPost();

const asyncCreateNewPost = async () => {
  isLoading = true;

  try {
    const response = await fetch(POSTS_URL, {method: 'POST'});
    const json = await response.json();
    console.log("Result", json);
  } catch (error) {
    console.error(error.message);
  } finally {
    isLoading = false;
  }
};
asyncCreateNewPost();


// TASK 2 🚩 . Rewrite code using async/await
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// Rewrite this "Promise" code
const getTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((data) => data.json());
      return Promise.all(dataResults)
    })
    .then((allTasks) => {
      console.log('Promise version', allTasks);
    })
    .catch((error) => {
      console.log(error);
    })
}
getTodosByIds([43, 21, 55, 100, 10]);


// Async code
const asyncGetTodosByIds = async (ids) => {
  try {
    const requests = ids.map(async (id) => {
      const resp = await fetch(`${TODOS_URL}/${id}`);
      return resp.json();
    });

    const allTasks = await Promise.all(requests);
    console.log("Async version", allTasks);
  } catch (error) {
    console.error(error.message);
  }
}
asyncGetTodosByIds([43, 21, 55, 100, 10]);


// TASK 3 🚩 Fetch data and put into DOM

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const dataContainerElem = document.querySelector(".data-container");

const renderAlbums = async () => {
  displayLoader(dataContainerElem, true);

  try {
    const response = await fetch(ALBUMS_URL);
    const albumList = await response.json();
    dataContainerElem.insertAdjacentHTML("beforeend", transformAlbumListIntoHtml(albumList))
  } catch (error) {
    console.error(error.message);
    const errorMessageHtml = "<span>Произошла ошибка в получении данных об альбомах...</span>"
    dataContainerElem.insertAdjacentHTML("afterbegin", errorMessageHtml);
  } finally {
    displayLoader(dataContainerElem, false);
  }
}
renderAlbums();

// Helper functions
function transformAlbumListIntoHtml(albumList = []) {
  return albumList.reduce((html, album) => html + `<li>${album?.title}</li>`, '');
}

function displayLoader(container, display = false) {
  if (display) {
    container?.append(generateLoader());
  }
  else {
    const loaderElem = container?.querySelector(".loader");
    loaderElem?.remove();
  }
}

function generateLoader() {
  const span = document.createElement('span');
  span.className = 'loader';
  span.textContent = 'Загрузка...';
  return span;
}
