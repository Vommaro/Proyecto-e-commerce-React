import CardWidget from "./CardWidget/CardWidget.jsx"
import { Link } from "react-router-dom"

function NavBar ({cardCount}){
    return(
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MarshallTech</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category/Motherboard">Mother Boards</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category/Tarjeta_gráfica">Placas de Video</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category/Memorias_RAM">Memorias RAM</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category/Almacenamiento">Almacenamiento</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category/Fuente_de_poder">Fuentes de Poder</Link>
              </li>
            </ul>
          </div>
          <CardWidget cardCount={cardCount}/>
        </div>
      </nav>
      )
}

export default NavBar