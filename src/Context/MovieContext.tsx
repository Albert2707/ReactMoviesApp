import { createContext, useContext, useState } from "react";
import axios from "axios";
import { MovieModel } from "../Model/Model";
const movieContext = createContext({});

export const useMovies = () => {
  const context = useContext(movieContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const MovieContextProvider: React.FC<Props> = ({ children }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieModel>();
  const [fields, setFields] = useState({
    name: movie && movie.name,
    img: movie && movie.img,
    description: movie && movie.description,
    gender: movie && movie.gender,
  });
  const getData = async () => {
    await axios.get(`https://reactmovieapp.onrender.com/movie/`).then((results) => {
      setMovie(results.data);
    });
  };
  const generateHexaColors = (): string => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };
  //console.log(movie)
  const getMovie = async (id: number) => {
    const result = await axios.get(`https://reactmovieapp.onrender.com/movie/${id}`);
    setFields(result.data[0]);
  };

  return (
    <movieContext.Provider
      value={{
        showForm,
        setShowForm,
        edit,
        setEdit,
        getMovie,
        movie,
        getData,
        fields,
        setFields,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default movieContext;
