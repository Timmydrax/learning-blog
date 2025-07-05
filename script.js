import { blogArray } from "./data.js";

const blog = document.getElementById("blog");
const footer = document.getElementById("footer");
const year = new Date().getFullYear();

footer.innerHTML = `
<p>My Learning Journal</p>
<p>Copyright ©${year}</p>
`;

function renderBlog(blogArray) {
  const blogContent = blogArray
    .map((blog, index) => {
      const { src, date, heading, text, alt } = blog;

      return `
        <article class="card">
        <img class="card-image" src="assets/images/${src}" alt="${alt}"/>
        <p class="card-date">${date}</p>
        <h2 class="card-heading">${heading}</h2>
        <p class="card-text">${text} </p>
        </article>  
        `;
    })
    .join("");

  return blogContent;
}

blog.innerHTML += renderBlog(blogArray);
