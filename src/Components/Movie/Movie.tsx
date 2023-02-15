import { FC, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { MovieModel } from "../../Model/Model";
import { useMovies } from "../../Context/MovieContext";
import { Show } from "../../Context/Type";
import axios from "axios";
import moment from "moment";
interface Props {
  data: MovieModel;
}
const Movie: FC<Props> = ({ data }) => {
  const { showForm, setShowForm, getMovie, setEdit } = useMovies() as Show;
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const config = {
    data: {
      id: data.id,
    },
  };
  const mutation = useMutation(
    (id: number) => {
      return axios.delete("https://reactmovieapp.onrender.com/admin/delete/", config);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["Movies"]);
      },
    }
  );

  const handleDelete = () => {
    mutation.mutate(data.id!);
  };

  const handleEdit = async () => {
    getMovie(data.id!);
    setEdit(true);
    setShowForm(!showForm);
  };
  return (
    <div className="bg-[#444] flex flex-col rounded-lg overflow-hidden pb-5 ">
      <img
        src={data.img}
        className="object-cover object-left-top h-64"
        alt={data.name}
      />
      <div className="relative flex flex-col gap-8 px-10 mt-2">
        <button
          className="absolute right-0 text-white"
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
):(         <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-9 h-9"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
  />
</svg>)}
 
        </button>

        {showOptions && (
          <div className="absolute flex  px-2 bg-[#222] gap-3 py-2 right-7 mimi_menu rounded-md -top-2  md:-top-10 xl:-top-2">
            <button
              className="px-2 text-white rounded-md bg-sky-400"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="px-2 py-1 text-white rounded-md bg-rose-400"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
        <h2
          className={`text-3xl font-semibold text-transparent bg-gradient-to-r from-yellow-500 via-[${data.color}] to-teal-500 bg-clip-text`}
        >
          {data.name}
        </h2>
        <div>

        <p className="text-xl font-medium text-gray-200">{data.description}</p>
        <p className=" text-sm text-gray-400">
          {moment(data.createAt).fromNow()}
        </p>
        </div>
        <div className="flex justify-between items-center ">
          <div className="p-2 rounded-lg bg-zinc-500 item">
            <span className="text-lg font-medium text-gray-300">
              {data.gender}
            </span>
          </div>
          {/* aqui */}
{/*           <div className="p-2 rounded-lg bg-zinc-500 item md:hidden">
            <span className="text-lg font-medium text-gray-300">
              {moment(data.createAt).fromNow()}
            </span>
          </div> */}
          <div className="p-2 rounded-lg item bg-zinc-500">
            <span className="text-lg font-medium text-gray-300">
              {data.state}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Movie;
