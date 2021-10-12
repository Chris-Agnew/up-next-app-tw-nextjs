export const mapUserData = user => {
  const { uid, email, displayName, photoURL, xa } = user;
  return {
    id: uid,
    email,
    token: xa,
    name: displayName,
    profilePic: photoURL,
  };
};
