
import { configureStore } from "@reduxjs/toolkit"
import {layOutImagesReducer} from './LayoutImages'
import categoriesData from './catogoryData'


const store = configureStore({
    reducer : {
        layouImages : layOutImagesReducer.reducer,
        categoriesData : categoriesData.reducer
    }
})

export default store;