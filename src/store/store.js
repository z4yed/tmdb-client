import { createStore } from "vuex";

export const store = createStore({
  state: {
    user: {
      name: "Zayed",
      email: "zayed.cs3@gmail.com",
    },
    genres: [],
  },
  getters: {
    getGenresByIds: (state) => (genreIds) => {
      const genres = [];

      state.genres.forEach((genre, index) => {
        if (genreIds.includes(genre.id)) {
          genres.push(genre.name);
        }
      });

      return genres;
    },
  },
  mutations: {
    setGenres: (state, payload) => {
      state.genres = payload;
    },
  },
  actions: {
    setGenres: (context) => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
        },
      };

      fetch(
        `${process.env.VUE_APP_TMDB_API_BASE_URL}/genre/movie/list?language=en`,
        options
      )
        .then((response) => response.json())
        .then((response) => context.commit("setGenres", response.genres))
        .catch((err) => console.error(err));
    },
  },
});
