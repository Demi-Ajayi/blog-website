document.addEventListener("DOMContentLoaded", function () {
  // Reference to the form and posts container
  const form = document.getElementById("blog-form");
  const postsContainer = document.getElementById("posts-container");
  const postUploadSection = document.getElementById("post-upload");
  const loginSection = document.getElementById("login-section");
  const hostLoginButton = document.getElementById("host-login");
  const viewerLoginButton = document.getElementById("viewer-login");
  const logoutButton = document.getElementById("logout");

  // Use localStorage to store posts persistently (in a real app, this would be stored in a database)
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

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

    // Save to localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Clear form inputs
    form.reset();

    // Render all posts
    displayPosts();
  });

  // Display posts on page reload
  displayPosts();

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

  // Host Login
  hostLoginButton.addEventListener("click", function () {
    // For simplicity, assume host login success without a password check
    loginSection.style.display = "none";
    postUploadSection.style.display = "block";
  });

  // Viewer login
  viewerLoginButton.addEventListener("click", function () {
    loginSection.style.display = "block";
    postUploadSection.style.display = "none";
  });
});
