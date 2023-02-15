import { MovieModel } from "../Model/Model";
export interface Show {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  movie: MovieModel;
  getMovie: (id: number) => void
  getMovies : () => Promise<MovieModel>
  idMovie?: number
  setIdMovie: React.Dispatch<React.SetStateAction<number>>;
  getData: ()=> void
  fields: any
  setFields:React.Dispatch<React.SetStateAction<{}>>;
}
