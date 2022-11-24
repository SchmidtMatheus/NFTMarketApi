import { api } from "./api";

export const loadPosts = async () => {
  const user = localStorage.getItem('user')
  const userId = JSON.parse(user)._id;
  const postsResponse = await api.get('/nftmarket/' + userId);
  const postsJson = await postsResponse.data.apiMarkets;
  const posts = postsJson.filter((post) => {
    return post.sale;
  });
  const Posts = posts.map((post) => {
    return { ...post };
  });
  return Posts;
};