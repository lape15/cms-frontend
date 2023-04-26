type User = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
};

export const addToStorage = (user: User, token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user || "{}"));
    localStorage.setItem("token", token);
  }
};

export const removeFromStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
};

export const getCredentials = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const credentials = {
      user: JSON.parse(user || "{}") || {},
      token,
    };
    return credentials;
  }
};

export const views = [
  { value: "dashboard", name: "Dashboard" },
  { value: "posts", name: "Posts" },
  { value: "create", name: "Create new post" },
  { value: "profile", name: "Profile" },
  { value: "drafts", name: "Drafts" },
  { value: "settings", name: "Settings" },
];
