import { FC, useState, useContext } from "react";
import { Show } from "../../Context/Type";
import movieContext from "../../Context/MovieContext";
interface Props {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Edit: FC<Props> = ({ setEdit }) => {
  const { edit, movie, idMovie } = useContext(movieContext) as Show;
  console.log(movie || "hola");
  const [fields, setFields] = useState({
    name: movie?.name,
    img: movie?.img,
    description: movie?.description,
    gender: movie?.gender,
    state: movie?.state,
  });

  const genders = [
    {
      label: "Accion",
      value: "Accion",
    },

    {
      label: "Anime",
      value: "Anime",
    },
    {
      label: "Dramas",
      value: "Dramas",
    },
    {
      label: "Documentales",
      value: "Documentales",
    },
    {
      label: "Terror",
      value: "Terror",
    },
    {
      label: "Deportes",
      value: "Deportes",
    },
    {
      label: "Romances",
      value: "Romances",
    },
  ];
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEdit(false);
  };

  return <div className="ds">sd</div>;
};

export default Edit;
