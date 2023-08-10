import supabaseClient from 'lib/supabaseClient';

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

const updateLikes = async (post) => {
  await supabaseClient.from('posts').update(post).eq('id', post.id);
};

export { getDetail, deletePost, updatePost, updateLikes };
