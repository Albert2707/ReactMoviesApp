import { useContext } from "react";
import movieContext from "../../Context/MovieContext";
import Form from "../Form/Form";
import { Show } from "../../Context/Type";


const Share = () => {
  const { showForm, setShowForm , setEdit, edit} = useContext(movieContext) as Show;
  const handleClick = () => {
    setShowForm(true);
    setEdit(false)
  };
  return (
    <div className="self-center -tracking-tighter">
      <div
        className="bg-gradient-to-r h-12 w-28 from-[#8B5FBF] via-[#E3879E] to-[#FEC0CE] flex justify-center items-center rounded-xl cursor-pointer hover:scale-105 transition duration-300"
        onClick={handleClick}
      >
        <button className="bg-black text-white h-[2.6rem] w-[6.6rem] rounded-xl font-semibold">
          Share
        </button>
      </div>
      {showForm && <Form/>}
    </div>
  );
};

export default Share;
