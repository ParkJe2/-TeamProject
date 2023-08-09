import supabaseClient from 'lib/supabaseClient';

const getPosts = async () => {
  const { data } = await supabaseClient.from('posts').select('*');
  return data;
};

const getDetail = async (id) => {
  const { data } = await supabaseClient.from('posts').select().eq('id', id);
  return data;
};

const deletePost = async (id) => {
  await supabaseClient.from('posts').delete().eq('id', id);
};

const updatePost = async (post) => {
  await supabaseClient.from('posts').update(post).eq('id', post.id);
};

const getLikes = async (id) => {
  // const { data } = await supabaseClient.from('likes').select().eq('postId', id);
  // const { data } = await supabaseClient.from('posts').select('likes').eq('id', id);
  // return data;
};

const updateLikes = async (post) => {
  await supabaseClient.from('posts').update(post).eq('id', post.id);
};

export { getPosts, getDetail, deletePost, updatePost, getLikes, updateLikes };
