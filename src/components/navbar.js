import './navbar.css';
import React from 'react'

function Navbar(){
    return (<nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/sport">

            Sports
      <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/live">

            live
      <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Casino">

            casino
      <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Live_casino">

          Live Casino
      <span className="sr-only">(current)</span>
          </a>
        </li>
       
      </ul>
 
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Login" aria-label="Login" />
        <input className="form-control mr-sm-2" type="text" placeholder="Password" aria-label="Password" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log in</button>
      </form>
    </div>
  </nav>)
}
export default Navbar;