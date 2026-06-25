// import { useEffect, useState } from 'react';
import './App.css'
import {Header} from "./components/header";
import { SearchBar } from './components/searchbar';
import { Gifs } from './components/gif';
import { useState } from 'react';
function App() {

  const [offset, setOffset] = useState(0);
  const [gifs, setGifs] = useState<any[]>([]);

  return (
    <>
    <Header></Header>
    <SearchBar offset={offset} setOffset={setOffset} gifs={gifs} setGifs={setGifs}></SearchBar>
    <Gifs offset={offset} setOffset={setOffset} gifs={gifs} setGifs={setGifs}></Gifs>
    </>
  )
}

export default App
