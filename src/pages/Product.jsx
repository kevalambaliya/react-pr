import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/Action";

const Product = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div className="wrap">
      {products && products.length > 0 ? (
        products.map((item, index) => (
          <div key={index} className="maincart">
            <div style={{display:"flex",justifyContent:"center"}}>
            <img src={item.image} alt="" style={{ width: "200px" }} />
            </div>
            <div style={{ textAlign: "start", marginLeft: "10px" }}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>{item.description}</p>
            </div>
            <div style={{ textAlign: "start", margin: "10px" }}>
              <button onClick={() => dispatch(deleteProduct(item.id))}>
                Delete
              </button>
              <button onClick={() => updatedata(item)}>Update</button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Product;
