type Props ={
  query:string;
  setQuery:React.Dispatch<React.SetStateAction<string>>;
}
export function SearchBar({query, setQuery} : Props){

  return (
    <div className='searchBar' id="searchBar">
      <input value={query} className="search" type='text' placeholder='Search all GIFs here' onChange={((e)=> (setQuery(e.target.value)))}></input>
      <img className='searchImg' src="/src/assets/search.png" alt="" />
    </div>
  )
}