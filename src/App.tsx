// import { useEffect, useState } from 'react';
import './App.css'
import {Header} from "./components/header";
import { SearchBar } from './components/searchbar';
import { Gifs } from './components/gif';
import {useEffect, useState } from 'react';
// import { ScrolledHeader } from './components/ScrolledHeader';
import { TrendingBar } from './components/trendingBar';
import { useDebounce } from './hooks/debounce';
function App() {

  // const [offset, setOffset] = useState(0);
  // const [gifs, setGifs] = useState<any[]>([]);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");
  
  const debouncedQuery = useDebounce(query, 500);

  return (
    <div className='container'>
      <div className='containerHead'>
        <Header setQuery={setQuery}></Header>
        <SearchBar query={query} setQuery={setQuery}></SearchBar>
        <TrendingBar setQuery={setQuery} ></TrendingBar>
      </div>
      <div className='mainContent'>
          <Gifs query={debouncedQuery}></Gifs>
      </div>
      <div className='footer'>
        <div>
          <h3>Footer</h3>
        </div>
      </div>
    {/* {isScrolled && <div className='scrolledHeader'>
      <ScrolledHeader></ScrolledHeader>
      <SearchBar query={query} setQuery={setQuery}></SearchBar>
      </div>} */}
    </div>
  )
}

export default App
