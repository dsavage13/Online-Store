import { Link } from "react-router-dom";
import "./styles/admin.css";
import { useState} from 'react';

function Admin() {

    const [allProducts, setAllProducts] = useState([]);
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code:'', //Not Required,  but it helps to have a visual
        discount:''
    });

    const [product, setProduct] = useState({
        title:'', //Not Required,  but it helps to have a visual
        category:'',
        image:'',
        price:'',
    });
    

    function handleCouponInputs(e){
        const val = e.target.value;
        const name = e.target.name;
        // rule for state variables (if array or obj -> 3 Steps)
            //Create a copy
            let copy = {...coupon};
            //Modify the copy
            if(name === 'discount'){
                copy.discount = val;
            }else{
                copy.code = val;
            }
            //Set the copy back
            setCoupon(copy);
    }

    function saveCoupon(){
        var copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function handleProductInputs(e){
        const val = e.target.value;
        const name = e.target.name;
        
        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct(){
        var copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
        <div className="admin page">
            <h1>Store Administration</h1>

            <div className="parent">

                <div className="products form">
                    <h3>Create Products</h3>
                    
                    <div className='mb-3'>
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" onBlur={handleProductInputs}/>
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" name="category" onBlur={handleProductInputs}/>
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" name="image" onBlur={handleProductInputs}/>
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" name="price" onBlur={handleProductInputs}/>
                    </div>

                    <div className="mb-3 btn-container">
                        <button className='btn btn-outline-dark'onClick={saveProduct}>Save Product</button>
                    </div>
                    <ul className="prod-list">
                        {allProducts.map(prod => 
                        <li className="prod-item">
                            <img className="prod-img" src={prod.image} alt="Product Image" />
                            {prod.title} - ${parseFloat(prod.price).toFixed(2)} 
                        </li>)}
                    </ul>

                </div>

                <div className="coupons form">
                    <h3>Create Coupons</h3>
                    
                    <div className='mb-3'>
                        <label className="form-label">Code</label>
                        <input type="text" className="form-control" onBlur={handleCouponInputs} name="code"/>
                    </div>

                    <div className='mb-3'>
                        <label className="form-label">Discount</label>
                        <input type="number" className="form-control" onBlur={handleCouponInputs} name="discount"/>
                    </div>

                    <div className='mb-5 btn-container'>
                        <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>
                        <ul className="coupon-list">
                            {allCoupons.map(cp => <li className="coupon-item">{cp.code} - {cp.discount}%</li>)}
                        </ul>
                        </div>
                    </div>

                </div>

            </div>
    );
}

export default Admin;
