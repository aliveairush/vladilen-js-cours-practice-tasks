const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const mainContainerElem = document.querySelector(".main-container");

const renderPost = async (postId) => {
  displayLoader(mainContainerElem, true);

  try {
    const postResponse = await fetch(`${POSTS_URL}/${postId}`);
    const commentsResponse = await fetch(`${COMMENTS_URL}?postId=${postId}`);

    const post = await postResponse.json();
    const comments = await commentsResponse.json();

    const postHtml = postTemplate({
      title: post?.title,
      text: post?.body,
      comments: comments,
    });

    mainContainerElem.insertAdjacentHTML("beforeend", postHtml);

  } catch (err) {
    console.error(err);
  } finally {
    displayLoader(mainContainerElem, false);
  }
}

renderPost(1);

// Helper Methods
function displayLoader(container, display = false) {
  if (display) {
    container?.insertAdjacentHTML("afterbegin", generateHtmlLoader());
  }
  else {
    const loaderElem = container?.querySelector(".la-line-scale-party");
    loaderElem?.remove();
  }
}

// HTML TEMPLATE GENERATION FUNCTIONS
function generateHtmlLoader() {
  return `<div class="la-line-scale-party">
    <div></div>
    <div></div>
    <div></div>
  </div>`
}

function postTemplate({title, text, comments} = {}) {
  const commentsHtml = comments?.reduce((html, comment) => html + commentTemplate({
    author: comment.email,
    text: comment.body
  }), '');

  return `<div id="post" class="post">
   <h1 class="post__title">${title}</h1>
   <p class="post__text">${text}</p>
   <strong class="post__comments-text">Комментарии</strong>
   <div class="post__comments">
       ${commentsHtml}
   </div>
</div>`
}

function commentTemplate({author, text} = {}) {
  return `<div class="post-comment">
           <span class="post-comment__author">
               ${author}
           </span>
           <span class="post-comment__text">
              ${text}
            </span>
         </div>`
}