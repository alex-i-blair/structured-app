import { client, parseData } from './client';

export async function getProfile() {
  const request = await client.from('profiles').select().single();
  return parseData(request);
}
export async function createProfile({
  name,
  username,
  email,
  bio,
  profilePic,
}) {
  const request = await client
    .from('profiles')
    .insert({ name, username, email, bio, profilePic });
  return parseData(request);
}

export async function updateProfile({
  name,
  username,
  email,
  bio,
  profilePic,
}) {
  const request = await client
    .from('profiles')
    .insert({ name, username, email, bio, profilePic });
  return parseData(request);
}
