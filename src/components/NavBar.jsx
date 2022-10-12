import {
  Link
} from "react-router-dom";



function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark text-uppercase">
  <Link to="/">EvolCiv</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/Devlog">Devlog</Link>
      </li>
      <li class="nav-item">
        <Link to="/Wiki">Wiki</Link>
      </li>
      <li class="nav-item">
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
        
    );
}

export default Navbar;