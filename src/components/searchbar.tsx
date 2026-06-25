import { useState } from "react";
type Props ={
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  gifs:any[];
  setGifs: React.Dispatch<React.SetStateAction<any[]>>;
}
export function SearchBar({offset, setOffset, gifs, setGifs} : Props){
  const [query, setQuery] = useState("");

  // const API_KEY = import.meta.env.VITE_API_KEY;
  const API_KEY2 = import.meta.env.VITE_API_KEY2;
  // const API_KEY3 = import.meta.env.VITE_API_KEY3;

  async function getSearchedGifs(){
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY2}&q=${query}&limit=10&offset=${offset}`)
    const data = await response.json()
    setGifs([]);
    setGifs(data.data);
  }

  return (
    <div className='searchBar' id="searchBar">
      <input className="search" type='text' placeholder='Search all GIFs here' onChange={(e)=> setQuery(e.target.value)}></input>
      <img onClick={getSearchedGifs} className='searchImg' src="/src/assets/search.png" alt="" />
    </div>
  )
}