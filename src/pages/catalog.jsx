import "./styles/catalog.css"
import Products from "../components/products";

function Catalog(){
    return(
        <div>
            <h1>This is where the catalog will be</h1>
            <div className="content">
                <br></br>
                <Products></Products>
                <Products></Products>
                <Products></Products>
                <Products></Products>
            </div>
        </div>
    );
}

export default Catalog;