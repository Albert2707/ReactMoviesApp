import Movies from "../../Components/Movies/Movies";
import Share from "../../Components/Share/Share";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#222] py-10">
      <div className="flex flex-col gap-8 mx-14">
        <Share/>
        <Movies />
      </div>
    </div>
  );
};

export default Home;
