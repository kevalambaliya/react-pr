import {
  API_DATA,
  GET_PRODUCTS,
  POST_PRODUCTS,
  REMOVE_PRODUCTS,
  UPDATE_PRODUCTS,
} from "./Actiontype";

const initialState = {
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
        products: [...state.products, payload],
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: state.products.map((ele) =>
          ele.id == payload.id ? payload : ele
        ),
      };
    case REMOVE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(({ id }) => id != payload),
      };
    default:
      return state;
  }
};
const apiProduct = {
  apidata: [],
};

export const reducerapi = (state = apiProduct, { type, payload }) => {
  switch (type) {
    case API_DATA:
      return {
        ...state,
        apidata:payload
      };
    default:
      return state;
  }
};
