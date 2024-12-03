import axios from "axios";

const instance = axios.create({
  baseURL: 'https://moviesverse1.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '7747e1df97msh383d2decac268adp179238jsnf9f443984b60'
  }
});

export default instance;
