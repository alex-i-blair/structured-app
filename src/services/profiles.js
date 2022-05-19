import { client, parseData } from './client';

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
