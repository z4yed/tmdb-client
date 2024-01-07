import { ref } from "vue";

const getNowPlayingMovies = () => {
  const items = ref([]);
  const error = ref(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
    },
  };

  const load = async () => {
    try {
      let data = await fetch(
        process.env.VUE_APP_TMDB_API_BASE_URL +
          "/movie/now_playing?language=en-US&page=1",
        options
      );

      if (data.ok) {
        const movies = await data.json();
        items.value = movies?.results;
      }
    } catch (err) {
      console.log(err);
      err.value = err.message;
    }
  };

  return { items, error, load };
};

export default getNowPlayingMovies;
