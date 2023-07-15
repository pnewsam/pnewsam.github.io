import showdown from "showdown";
import { getPosts } from "../scripts/api";

document.addEventListener("DOMContentLoaded", () => {
  main();
});

const converter = new showdown.Converter();

export const convertMarkdown = (text) => converter.makeHtml(text);

const postTemplate = (post) => {
  const {
    title,
    createdAt,
    description,
    updatedAt,
    publishedAt,
    slug,
    tags,
    content,
  } = post.attributes;
  const readableCreatedAt = new Date(createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return `
    <div class="post mt-12">
      <h1>${title}</h1>
      <h3>${description}</h3>
      <date>${readableCreatedAt}</date>
      <hr />
      <div>${convertMarkdown(content)}</div>
    </div>
  `;
};

const main = async function () {
  const posts = await getPosts();
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    const template = postTemplate(post);
    console.log({ template, postElement });
    postElement.innerHTML = postTemplate(post);
    document.querySelector("#posts").appendChild(postElement);
  });
};
