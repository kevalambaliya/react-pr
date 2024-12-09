import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProduct, patchProduct, postProduct } from "../redux/Action";

const Form = () => {
  const [data, setData] = useState({
    image:"",
    title: "",
    price: "",
    description: "",
  });

  const [id,setId]=useState(-1)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title && data.price && data.description) {
     if(id==-1){

       dispatch(postProduct(data));
     }
     else{
      dispatch(patchProduct(id,data));
      setId(-1)
     }
      setData({ title: "", price: "", description: "" }); 
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const updatedata = (Product)=>{
   
    setData({
      ...Product,
    })
    setId(Product.id)
  }

  return (
    <div className="main">
      <div className="main2">
      <form onSubmit={handleSubmit}>
      <input
          type="url"
          name="image"
          placeholder="Product Image"
          value={data.image}
          onChange={handleInput}
          className="input"
        />
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={data.title}
          onChange={handleInput}
          className="input mt"
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={data.price}
          onChange={handleInput}
          className="input mt"
        />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          value={data.description}
          onChange={handleInput}
          className="input mt"
        />
        <button type="submit" className="button mt">Add Product</button>
      </form>
      </div>

      {/* <div>
        <h2>Products</h2>
        
      </div> */}
    </div>
  );
};

export default Form;
