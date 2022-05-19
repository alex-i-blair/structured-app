export default function Profile({ profile: { username, name, email, bio } }) {
  return (
    <article className="profile">
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
      <blockquote>{bio}</blockquote>
    </article>
  );
}
