import { api } from "./api";

export const loadPosts = async () => {
  const postsResponse = await api.get('/nft');
  const postsJson = await postsResponse.data.nfts;
  const posts = postsJson.filter((post) => {
    return post.sale;
  });
  const Posts = posts.map((post) => {
    return { ...post };
  });
  return Posts;
};