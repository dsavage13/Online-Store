import "./styles/products.css";
import QuantityPicker from "./quantityPicker";

function Products(){
    return(
        <div className="card">
            <span>ID: 0000</span>
            <img src="https://picsum.photos/250/200" alt=""/>
            <div className="card-body">
                <h3 className="card-title">Product</h3>
                <label>$total</label>
                <label>$price</label>
                <div>
                    <QuantityPicker></QuantityPicker>
                </div>
                <button className = "btn btn-sm btn-success">
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Products;
