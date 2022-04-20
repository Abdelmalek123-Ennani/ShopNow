
import { configureStore } from "@reduxjs/toolkit"
import {layOutImagesReducer} from './LayoutImages'
import categoriesData from './catogoryData'
import cardItems from './cardItems'


const store = configureStore({
    reducer : {
        layouImages : layOutImagesReducer.reducer,
        categoriesData : categoriesData.reducer,
        cardItems : cardItems.reducer
    }
})

export default store;