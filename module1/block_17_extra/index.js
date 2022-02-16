const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const renderPost = async (postId) => {
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

    document.body.insertAdjacentHTML("afterbegin", postHtml);

  } catch (err) {
    console.error(err);
  }
}

renderPost(1);

// HTML TEMPLATE GENERATION FUNCTIONS

function postTemplate({title, text, comments} = {}) {
  const commentsHtml = comments?.reduce((html, comment) => html + commentTemplate({author: comment.email, text: comment.body }), '');

  return `<div id="post" class="post">
   <h1 class="post__title">${title}</h1>
   <p class="post__text">${text}</p>
   <b class="post__comments-text">Комментарии</b>
   <div class="post__comments">
       ${commentsHtml}
   </div>
</div>`
}

function commentTemplate({author, text} = {}) {
  console.log("Called", author)
  return `<div class="post-comment">
           <span class="post-comment__author">
               ${author}
           </span>
           <span class="post-comment__text">
              ${text}
            </span>
         </div>`
}