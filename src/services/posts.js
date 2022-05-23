import { client, parseData } from './client';

export async function getPosts() {
  const request = await client.from('posts').select();
  return parseData(request);
}

export async function getPostDetails(id) {
  const request = await client.from('posts').select().single().match({ id });
  return parseData(request);
}

export async function postPost({ chirp, username }) {
  const request = await client
    .from('posts')
    .insert({ chirp, username })
    .single();
  return parseData(request);
}
