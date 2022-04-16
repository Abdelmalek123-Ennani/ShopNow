
import {  createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const layOutImages = createSlice({
    name : "getImagesForLayOut",
    initialState : {
        images : []
    },
    reducers : {
        addImage(state , action) {
            // get an image for each category
            let prevCategories = [];
            const getAnImageForEachCategory = action.payload.filter((data) => {
                if ( !prevCategories.includes(data.category)) {
                    prevCategories.push(data.category);
                    return data;
                }
            })
            // get just images not all data
            state.images = [...getAnImageForEachCategory].map(el => el.image);
        }
    }
})


// create a tunk
export const getImageForLayOut = () => {
     return async(dispatch) => {
         const fetchHandler = async() => {
            const getDate = await axios("https://fakestoreapi.com/products");
            // set the data to the slice
            dispatch(layOutImages.actions.addImage(getDate.data))
         }
         fetchHandler();
     }
}

export const layOutImagesReducer = layOutImages;
