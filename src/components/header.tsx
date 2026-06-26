import {Nav} from "./navbar.jsx"

type Props ={
  setQuery:React.Dispatch<React.SetStateAction<string>>;
}

export function Header({setQuery}: Props){
  return (
    <div className='header'>
      <div className="headerImg">
    <h1>GIFs........</h1>
    </div>
    <div>
      <Nav setQuery={setQuery}></Nav>
    </div>
    </div>
  )
}