import { useContext } from "react";
import "./styles/navbar.css";
import { Link } from 'react-router-dom';
import GlobalContext from "../context/globalContext";

function Navbar() {

    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    function getProdCount(){
        let total = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            total += prod.quantity;
        }

        return total;
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Lost Skills Co.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/list">List</Link>
                            </li>
                        </ul>

                        <div className="d-flex" role="search">
                            <div className="btn btn-outline-light me-3">
                                {user.name}
                            </div>
                            <Link className='btn btn-outline-light me-2' to="/cart">View Cart <span class="badge text-bg-light">{getProdCount()}</span></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;