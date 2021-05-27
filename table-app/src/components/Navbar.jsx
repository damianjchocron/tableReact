
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active">Inicio</a>
                </li>
                <li className="nav-item">
                    {/* <NavLink to="/create" className="nav-link" activeClassName="active">Crear</NavLink> */}
                </li>
            </ul>
        </nav>
    )
}
