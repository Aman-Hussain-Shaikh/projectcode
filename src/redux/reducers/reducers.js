import {combineReducers} from 'redux'

import {ADD_PRODUCT ,DELETE_PRODUCT , UPDATE_PRODUCT , FETCH_PRODUCTS_FAILURE , FETCH_PRODUCTS_REQUEST , FETCH_PRODUCTS_SUCCESS} from '../actions/actions'

const initialProductState ={
    products:[],
    loading:false,
    error:null,

}

const productsReducer = (state=initialProductState , action)=>{
    switch(action.type)
    {
        case FETCH_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload.products,
                total:action.payload.total,
                skip :action.payload.skip,
                limit:action.payload.limit
            }

        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case ADD_PRODUCT:
            return{
                ...state,
                products:[...state.products,action.payload],
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                products:state.products.filter(product => product.id !== action.payload)
            }
        case UPDATE_PRODUCT:
            return{
                ...state,
                products:state.products.map(product => product.id === action.payload.id?{...product,...action.payload}:product)
            }
        default :
        return state;
    }
}

export default combineReducers({
    products:productsReducer,
})