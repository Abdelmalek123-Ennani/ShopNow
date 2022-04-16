

import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const categoriesData = createSlice({
    name : "CategorieData",
    initialState : {
        categoryProducts : []
    } , 
    reducers : {
        setCategoryData(state , action) {
            state.categoryProducts = [...action.payload];
        }
    }
})


export const fetchCategoryData = (category) => {
    return async(dispatch) => {
        const fetchHandler = async() => {
           const getData = await axios(`https://fakestoreapi.com/products/category/${category}?&limit=3`);
           dispatch(categoriesData.actions.setCategoryData(getData.data))
        }
        fetchHandler();
    }
}

export const fetchCategoryAllData = (category) => {

    if ( category == "ALL" ) {
        return async(dispatch) => {
            const fetchHandler = async() => {
               const getData = await axios(`https://fakestoreapi.com/products`);
               dispatch(categoriesData.actions.setCategoryData(getData.data))
            }
            fetchHandler();
        }
    }

    
    return async(dispatch) => {
        const fetchHandler = async() => {
        const getData = await axios(`https://fakestoreapi.com/products/category/${category}`);
        dispatch(categoriesData.actions.setCategoryData(getData.data))
        }
        fetchHandler();
    }

}

export const getSingleProduct = (idProduct) => {
       return async (dispatch) => {
            const fetchProduct = async () => {
                const getProduct = await axios(`https://fakestoreapi.com/products/${idProduct}`);
                dispatch(categoriesData.actions.setCategoryData([getProduct.data]));
            }

            fetchProduct();
       }
}


export default categoriesData;




















