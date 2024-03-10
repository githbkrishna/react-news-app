import React from 'react'
import '../App.css'

const Nav = ({ setcategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setcategory("technology")}>technology</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link"  onClick={()=>setcategory("health")}>health</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setcategory("entertainment")}>entertainment</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link"  onClick={()=>setcategory("sports")}>sports</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link"  onClick={()=>setcategory("buisness")}>buisness</div>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav