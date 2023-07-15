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
    <article id="${slug}" class="pt-12 mb-40">
      <h1>${title}</h1>
      <h3>${description}</h3>
      <date>${readableCreatedAt}</date>
      <hr class="bold" />
      <section>${convertMarkdown(content)}</section>
    </article>
  `;
};

const recentPostTemplate = (post) => {
  const { createdAt, description } = post.attributes;
  const readableCreatedAt = new Date(createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return `
  <li class="inline-block border-2 border-gray-700 rounded p-4 w-[32%] shadow-sm">
    <a class="mb-2 inline-block font-semibold" href="#${post.attributes.slug}">${post.attributes.title}</a>
    <p class="text-sm">${description}</p>
    <p class="text-sm">${readableCreatedAt}</p>
  </li>
`;
};

const main = async function () {
  var posts = await getPosts();
  posts = posts.sort(
    (a, b) =>
      new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
  );

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    const template = postTemplate(post);
    console.log({ template, postElement });
    postElement.innerHTML = postTemplate(post);
    document.querySelector("#posts").appendChild(postElement);
    document.querySelector("#posts-list").innerHTML += recentPostTemplate(post);
  });
};
