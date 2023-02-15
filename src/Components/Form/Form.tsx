import { useState, useContext } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import axios from "axios";
import { Show } from "../../Context/Type";
import movieContext from "../../Context/MovieContext";
import { MovieModel } from "../../Model/Model";

const Form = () => {
  const { edit, movie, setShowForm, fields, setFields } = useContext(
    movieContext
  ) as Show;
  const [gender, setGender] = useState<string>("");

  const queryClient = useQueryClient();
  const add = useMutation(
    (newMovie: MovieModel) => {
      return axios.post("https://reactmovieapp.onrender.com/admin/add/", newMovie);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["Movies"]);
      },
    }
  );

  const update = useMutation(
    (newMovie: MovieModel) => {
      return axios.put("https://reactmovieapp.onrender.com/admin/update/", newMovie);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["Movies"]);
      },
    }
  );

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
    if (edit) {
      const updateData: MovieModel = {
        id: fields.id,
        name: fields.name,
        img: fields.img,
        state: "activa",
        description: fields.description,
        gender: fields.gender,
      };
      update.mutate(updateData);
    } else {
      const datos: MovieModel = {
        name: fields.name,
        img: fields.img,
        state: "activa",
        description: fields.description,
        gender: fields.gender,
      };
      await add.mutateAsync(datos);
    }

    setShowForm(false);
    setFields({});
  };

  const handleChange = (e: any) => {
    setFields((prev: any) => ({ ...prev, [e.target.name]: [e.target.value] }));
    console.log(fields);
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/60">
      <div className="">
        <form
          action=""
          className="relative gap-5 mx-auto overflow-hidden font-medium tracking-wide bg-[#444] w-96 rounded-3xl"
          onSubmit={handleSubmit}
        >
          <button
            className="absolute z-10 transition duration-500 right-3 top-3 hover:rotate-90"
            onClick={() => {
              setShowForm(false);
              setFields({});
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative h-48 bg-rose-600 rounded-bl-4xl">
            <svg
              className="absolute -bottom-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#444"
                fillOpacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="px-10 pt-4 pb-8 rounded-tr-4xl">
            <h1 className="text-2xl text-center text-gray-100">
              Add new movie
            </h1>
            <div className="relative mt-10">
              <input
                type="text"
                id="title"
                className="w-full h-10 text-gray-300 placeholder-transparent bg-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600"
                name="name"
                value={fields?.name || ""}
                placeholder="Title"
                onChange={handleChange}
              />
              <label
                htmlFor="title"
                className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-100 peer-focus:text-sm"
              >
                Title
              </label>
            </div>

            <div className="relative mt-10">
              <input
                type="text"
                id="img"
                className="w-full h-10 text-gray-300 placeholder-transparent bg-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600"
                name="img"
                value={fields?.img || ""}
                placeholder="Img"
                onChange={handleChange}
              />
              <label
                htmlFor="img"
                className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-100 peer-focus:text-sm"
              >
                Img url
              </label>
            </div>
            <div className="relative mt-10">
              <input
                type="text"
                id="Description"
                className="w-full h-10 text-gray-300 placeholder-transparent bg-transparent border-b-2 border-gray-400 peer focus:outline-none focus:border-rose-600"
                name="description"
                value={fields?.description || ""}
                placeholder="Description"
                onChange={handleChange}
              />
              <label
                htmlFor="Description"
                className="absolute left-0 -top-3.5 text-gray-200 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-100 peer-focus:text-sm"
              >
                Description
              </label>
            </div>

            {/* <textarea name="" id="" cols={10} rows={2} placeholder="Input a description" className="p-3 rounded-lg"/> */}
            <select
              name="gender"
              id=""
              className="w-full h-10 px-2 py-2 mt-10 text-gray-300 placeholder-transparent bg-transparent border-b-2 border-gray-400 peer focus:outline-none focus:border-rose-600"
              onChange={handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                {fields?.gender || "Genders"}
              </option>
              {genders.map((gende, index) => (
                <option key={index} value={gende.value}>
                  {gende.label}
                </option>
              ))}
            </select>
            <button className="w-full px-4 py-2 mt-20 font-semibold text-center text-white rounded cursor-pointer bg-rose-600 hover:bg-rose-500 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-600 focus:ring-opacity-80">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
