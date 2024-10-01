document.addEventListener("DOMContentLoaded", function () {
  // Reference to the form and posts container
  const form = document.getElementById("blog-form");
  const postsContainer = document.getElementById("posts-container");

  // Array to store posts (in a real app, this would be stored in a database)
  let posts = [];

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission refresh

    // Get title and content from form inputs
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Create a new post object
    const newPost = {
      title: title,
      content: content,
      date: new Date().toLocaleDateString(),
    };

    // Add new posts to the array
    posts.push(newPost);

    // Clear form inputs
    form.reset();

    // Render all posts
    displayPosts();
  });

  // Function to diplay all posts
  function displayPosts() {
    // Clear the posts container first
    postsContainer.innerHTML = "";

    // Loop through all posts and create HTML structure for each
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");

      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <small>Posted on ${post.date}</small>
        `;

      // Add the post element to the container
      postsContainer.appendChild(postElement);
    });
  }
});
