import axios from 'axios'

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const fetchProductsRequest = (forceFetch = false) => async (dispatch, getState) => {
   
    if (forceFetch || getState().products.products.length === 0) {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });
        try {
            const response = await axios.get('https://dummyjson.com/products');
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: error.message,
            });
        }
    }
};

export const addProduct = (newProduct) =>(dispatch)=>{
    dispatch({
        type:ADD_PRODUCT,
        payload:newProduct
    })
}


export const deleteProduct = (productid) =>(dispatch)=>{
    dispatch({
        type:DELETE_PRODUCT,
        payload:productid
    })
}


export const updateProduct = (updateProduct) =>(dispatch)=>{
    dispatch({
        type:UPDATE_PRODUCT,
        payload:updateProduct
    })
}


