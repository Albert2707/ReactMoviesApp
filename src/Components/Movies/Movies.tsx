import Movie from "../Movie/Movie";
import { useQuery } from "react-query";
import axios from "axios";
import { MovieModel } from "../../Model/Model";
import { useMovies } from "../../Context/MovieContext";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { Show } from "../../Context/Type";
const MovieCover = () => {
  const { data, isLoading, error } = useQuery(
    "Movies",
    () => {
      return axios
        .get("https://reactmovieapp.onrender.com/movie")
        .then((results) => results.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-[50px] ">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        data.map((result: MovieModel) => (
          <Movie key={result.id} data={result} />
        ))
      )}
    </div>
  );
};

export default MovieCover;
