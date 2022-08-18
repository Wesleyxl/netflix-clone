import { apiPrivate } from "./config";

export const movieRoutes = {
  index: async () => {
    const response = apiPrivate
      .get("/movies")
      .then((resp) => resp.data)
      .catch((error) => error.response.data);

    return response;
  },

  show: async (id) => {
    const response = apiPrivate
      .get(`movie/${id}`)
      .then((resp) => resp.data)
      .catch((error) => error.response.data);

    return response;
  },

  getBanner: async () => {
    const response = apiPrivate
      .get("/movies/banner")
      .then((resp) => resp.data)
      .catch((error) => error.response.data);

    return response;
  },
};
