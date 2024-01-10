import { createStore } from "vuex";
import makeApiCall from "@/utils/apiClient";

export const store = createStore({
  state: {
    user: null,
    genres: [],
    favoriteList: [],
    watchList: [],
  },
  getters: {
    isLoggedIn: (state) => {
      return Boolean(state.user);
    },
    getGenresByIds: (state) => (genreIds) => {
      const genres = [];

      state.genres.forEach((genre) => {
        if (genreIds.includes(genre.id)) {
          genres.push(genre.name);
        }
      });

      return genres;
    },
    getFavoriteSeriesIds: (state) => {
      return state.favoriteList.map((series) => series.id);
    },
    isSeriesAlreadyFavorite: (state) => (seriesId) => {
      return state.favoriteList.find((series) => series.id === seriesId);
    },
    getWatchListIds: (state) => {
      return state.watchList.map((series) => series.id);
    },
    isSeriesAlreadyInWatchList: (state) => (seriesId) => {
      return state.watchList.find((series) => series.id === seriesId);
    },
  },
  mutations: {
    login: (state, payload) => {
      state.user = payload;
    },
    logout: (state) => {
      state.favoriteList = [];
      state.watchList = [];
      state.user = null;
    },
    setGenres: (state, payload) => {
      state.genres = payload;
    },
    setFavorites: (state, payload) => {
      state.favoriteList = [...state.favoriteList, ...payload];
    },
    removeFromFavorite: (state, payload) => {
      state.favoriteList = state.favoriteList.filter(
        (series) => series.id != payload.id
      );
    },
    setWatchList: (state, payload) => {
      state.watchList = [...state.watchList, ...payload];
    },
    removeFromWatchList: (state, payload) => {
      state.watchList = state.watchList.filter(
        (series) => series.id != payload.id
      );
    },
  },
  actions: {
    setGenres: async (context) => {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      const genreListUrl = `/genre/tv/list`;

      const genreList = await makeApiCall(genreListUrl, "get", null, headers);
      context.commit("setGenres", genreList.genres);
    },

    setFavorites: async (context) => {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      const favoriteListUrl = `/account/${process.env.VUE_APP_TMDB_ACCOUNT_ID}/favorite/tv`;

      const favoriteSeries = await makeApiCall(
        favoriteListUrl,
        "get",
        null,
        headers
      );

      context.commit("setFavorites", favoriteSeries?.results);
    },

    modifyFavorites: async (context, payload) => {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      const modifyFavoriteUrl = `/account/${process.env.VUE_APP_TMDB_ACCOUNT_ID}/favorite`;

      const requestPayload = {
        media_type: "tv",
        media_id: payload.series.id, // series id
        favorite: payload.status, // add: true, remove: false
      };

      const addOrRemoveResponse = await makeApiCall(
        modifyFavoriteUrl,
        "post",
        requestPayload,
        headers
      );

      if (addOrRemoveResponse.success) {
        if (payload.status) {
          context.commit("setFavorites", [payload.series]);
        } else {
          context.commit("removeFromFavorite", payload.series);
        }
      }
    },

    setWatchList: async (context) => {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      const watchListUrl = `/account/${process.env.VUE_APP_TMDB_ACCOUNT_ID}/watchlist/tv`;

      const watchListSeries = await makeApiCall(
        watchListUrl,
        "get",
        null,
        headers
      );

      context.commit("setWatchList", watchListSeries?.results);
    },
    modifyWatchList: async (context, payload) => {
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      const modifyWatchlistUrl = `/account/${process.env.VUE_APP_TMDB_ACCOUNT_ID}/watchlist`;

      const requestPayload = {
        media_type: "tv",
        media_id: payload.series.id, // series id
        watchlist: payload.status, // add: true, remove: false
      };

      const addOrRemoveResponse = await makeApiCall(
        modifyWatchlistUrl,
        "post",
        requestPayload,
        headers
      );

      if (addOrRemoveResponse.success) {
        if (payload.status) {
          context.commit("setWatchList", [payload.series]);
        } else {
          context.commit("removeFromWatchList", payload.series);
        }
      }
    },
  },
});
