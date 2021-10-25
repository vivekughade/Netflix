import React from 'react';
import "./style.css";
const Menu = () => {
    return (
        <>
        
<nav  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <h4>Logo</h4>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/games">Games</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/movies">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/downloads">Downloads</a>
      </li>
      
    
    </ul>
    
  </div>
</nav>

        
        </>
    )
}

export default Menu;