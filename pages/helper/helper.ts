type User = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
};

export const addToStorage = (user: User, token: string) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const removeFromStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
