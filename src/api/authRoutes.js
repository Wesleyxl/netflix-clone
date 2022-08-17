import { api } from "./config";

export const authRoutes = {
  login: async (email, password) => {
    const response = api
      .post("/auth/login", {
        email,
        password,
      })
      .then((resp) => resp.data)
      .catch((error) => error.response.data);

    return response;
  },
};
