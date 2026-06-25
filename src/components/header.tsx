import {Nav} from "./navbar.jsx"

export function Header(){
  return (
    <div className='header'>
      <div className="headerImg">
    <img className="haederImg" src="https://giphy.com/static/img/giphy-logo.webp" alt="" />
    </div>
    <div>
      <Nav></Nav>
    </div>
    </div>
  )
}