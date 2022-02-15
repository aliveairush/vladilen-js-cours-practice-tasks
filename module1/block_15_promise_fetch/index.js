const USER_LIST_URL = "https://jsonplaceholder.typicode.com/users";
const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos"

const dataContainerElem1 = document.querySelector("#data-container-1");
const dataContainerElem2 = document.querySelector("#data-container-2");
const dataContainerElem3 = document.querySelector("#data-container-3");

// 🚩 TASK 1

const generateLoader = () => {
  const span = document.createElement('span');
  span.className = 'loader';
  span.textContent = 'Загрузка...';
  return span;
}

const displayLoader = (container, display = false) => {
  if (display) {
    container?.append(generateLoader());
  }
  else {
    const loaderElem = container?.querySelector(".loader");
    loaderElem?.remove();
  }
}

const transformUserListIntoHtml = (userList = []) => userList.reduce((html, user) => html + `<li><a href="#">${user.name}</a></li>`, '');

const loadAllUsers = () => {
  displayLoader(dataContainerElem1, true);

  fetch(USER_LIST_URL)
    .then((response) => {
      if (!response.ok) throw new Error("Something went wrong, could not fetch data");
      return response.json();
    })
    .then(userList => dataContainerElem1.insertAdjacentHTML("beforeend", transformUserListIntoHtml(userList)))
    .catch(error => console.error(error.message))
    .finally(() => displayLoader(dataContainerElem1, false));
}

loadAllUsers();

// TASK 2 🚩
const getUsersByIds = (ids = []) => {
  displayLoader(dataContainerElem2, true);

  const requests = ids.map(id => fetch(`${USER_LIST_URL}/${id}`));

  Promise.all(requests)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(responseJsonList => dataContainerElem2.insertAdjacentHTML("beforeend", transformUserListIntoHtml(responseJsonList)))
    .catch(error => console.error(error.message))
    .finally(() => displayLoader(dataContainerElem2, false));
}

getUsersByIds([5, 6, 2, 1]);


// TASK 3 🚩

const transformPhotoIntoHtml = ({url, title} = {}) => {
  return `<div class="photo-item">
    <img alt="" class="photo-item__image" src="${url}">
      <h3 class="photo-item__title">
        ${title}
      </h3>
  </div>`
}

const getFastestLoadedPhoto = (ids) => {
  displayLoader(dataContainerElem3, true);

  const requests = ids.map(photoId => fetch(`${PHOTOS_URL}/${photoId}`));

  Promise.race(requests)
    .finally(() => displayLoader(dataContainerElem3, false))
    .then(response => response.json())
    .then(photo => {
      console.log(photo);
      dataContainerElem3.insertAdjacentHTML("beforeend", transformPhotoIntoHtml(photo));
    })
    .catch(error => console.error(error.message));
}

getFastestLoadedPhoto([60, 12, 55])