// import { useEffect, useState } from 'react';
import './App.css'
import {Header} from "./components/header";
import { SearchBar } from './components/searchbar';
import { Gifs } from './components/gif';
import { use, useEffect, useState } from 'react';
import { ScrolledHeader } from './components/ScrolledHeader';
import { TrendingBar } from './components/trendingBar';
function App() {

  const [offset, setOffset] = useState(0);
  const [gifs, setGifs] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(()=>{
     const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 100);
     }

     window.addEventListener('scroll', handleScroll);

     return ()=> window.removeEventListener('scroll', handleScroll);

  }, [])

  return (
    <>
    {isScrolled && <div className='scrolledHeader'>
      <ScrolledHeader></ScrolledHeader>
      <SearchBar offset={offset} setOffset={setOffset} gifs={gifs} setGifs={setGifs} query={query} setQuery={setQuery}></SearchBar>
      </div>}
    <Header></Header>
    <SearchBar offset={offset} setOffset={setOffset} gifs={gifs} setGifs={setGifs} query={query} setQuery={setQuery}></SearchBar>
    <TrendingBar offset={offset} setOffset={setOffset} gifs={gifs} setGifs={setGifs} query={query} setQuery={setQuery} ></TrendingBar>
    <Gifs offset={offset} setOffset={setOffset} gifs={gifs} setGifs={setGifs}></Gifs>
    </>
  )
}

export default App
