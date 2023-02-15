export interface MovieModel {
  id?: number;
  name: string;
  img: string;
  description: string;
  gender?: string;
  state?:string
  createAt?: Date
  color?: string
}
