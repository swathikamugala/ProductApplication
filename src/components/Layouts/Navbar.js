
import React from "react";
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link class="nav-link active"aria-current="page" to="/home">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active"aria-current="page" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active"aria-current="page" to="/contact">Contact</Link>
      </li>
    
    {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul> */}
    </ul>
    </div>
    <Link className='btn btn-info' to="/Items/add">Add Item</Link>
    </div>
    </nav>
      
    )
}
export default Navbar;
