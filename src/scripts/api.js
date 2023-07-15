const strapiToken = import.meta.env.VITE_STRAPI_API_TOKEN;
const strapiUrl = import.meta.env.VITE_STRAPI_URL;

const headers = {
  Authorization: `Bearer ${strapiToken}`,
};

export const getPosts = async () => {
  console.log(import.meta.env.VITE_STRAPI_API_TOKEN);
  const result = await fetch(`${strapiUrl}/api/posts`, {
    headers,
  });
  const { data } = await result.json().then((data) => data);
  return data;
};

export const getPost = async () => {
  const result = await fetch(`${strapiUrl}/api/posts/${1}`, {
    headers,
  });
  const { data } = await result.json().then((data) => data);
  return data;
};
