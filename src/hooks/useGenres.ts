import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background:string
}

 interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => useData<Genre>('genre')



export default useGenres