import cookies from "js-cookie";

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return;
  }
  return JSON.parse(user);
};

export const setUserCookie = user => {
  cookies.set("auth", user, { expires: 7 });
};

export const removeUserCookie = () => {
  cookies.remove("auth");
};
