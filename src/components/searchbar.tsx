export function SearchBar(){
  

  return (
    <div className='searchBar'>
      <input className="search" type='text' placeholder='Search all GIFs here'></input>
      <img className='searchImg' src="/src/assets/search.png" alt="" />
    </div>
  )
}