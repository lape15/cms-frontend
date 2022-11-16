type User = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
};

export const addToStorage = (user: User, token: string) => {
  console.log(token, user);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};
