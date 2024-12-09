import axios from "axios";
import {
  API_DATA,
  GET_PRODUCTS,
  POST_PRODUCTS,
  REMOVE_PRODUCTS,
  UPDATE_PRODUCTS,
} from "./Actiontype";

const baseurl = `http://localhost:3000/products`;

export const fetchProduct = () => async (dispatch) => {
  let res = await axios.get(baseurl);
  console.log(res.data);
  dispatch(getProduct(res.data));
};

export const postProduct = (payload) => async (dispatch) => {
  let res = await axios.post(baseurl, payload);
  console.log(res.data);
  dispatch(createProduct(res.data));
};

export const patchProduct = (id, payload) => async (dispatch) => {
  let res = await axios.patch(`${baseurl}/${id}`, payload);
  dispatch(updateProduct(res.data));
};

export const get = () => async (dispatch) => {
  
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log( res.data); // Debug log
    dispatch(addApi(res.data));
  
};

export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`${baseurl}/${id}`);
  dispatch(removeData(id));
};
////////////////////////////
const getProduct = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload: payload,
  };
};
const createProduct = (payload) => {
  return {
    type: POST_PRODUCTS,
    payload: payload,
  };
};
const updateProduct = (payload) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: payload,
  };
};

const removeData = (id) => {
  return {
    type: REMOVE_PRODUCTS,
    payload: id,
  };
};

export const addApi = (data) => {
  return {
    type: API_DATA,
    payload: data,
  };
};
