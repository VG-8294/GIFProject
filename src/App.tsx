// import { useEffect, useState } from 'react';
import './App.css'
import {Header} from "./components/header";
import { SearchBar } from './components/searchbar';
import { Gifs } from './components/gif';
function App() {

  return (
    <>
    <Header></Header>
    <SearchBar></SearchBar>
    <Gifs></Gifs>
    </>
  )
}

export default App
