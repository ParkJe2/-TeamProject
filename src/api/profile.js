import supabase from 'lib/supabaseClient';

const getProfile = async () => {
  const { data } = await supabase.from('members').select();
  return data;
};

const updateProfile = async (member) => {
  await supabase.from('members').update(member).eq('id', member.id);
};

export { getProfile, updateProfile };
