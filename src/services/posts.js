import { client, parseData } from './client';

export async function getPosts() {
  const request = await client.from('posts').select();
  return parseData(request);
}

export async function getPostDetails(id) {
  const request = await client.from('posts').select().single().match({ id });
  const data = parseData(request);

  console.log(data);

  return data;
  /* {
    username: profiles.username,
    chirp: data.chirp,
    createdAt: data.created_at,
  };*/
}

export async function postPost({ chirp }) {
  const request = await client.from('posts').insert({ chirp }).single();
  return parseData(request);
}
