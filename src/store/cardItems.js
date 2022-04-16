
import { createSlice } from '@reduxjs/toolkit'


const cardItems = createSlice({
    name : "cardItems",
    initialState : {
        cardItems : []
    },
    reducers : {
        addToCard(state , action) {
            if ( state.cardItems.find(el => el.id == action.payload.id) ) {
                state.cardItems = state.cardItems.map(item => {
                    if ( item.id == action.payload.id ) {
                        return { ...item , quanity : action.payload.quanity  }
                    }
                })
            } else {
                state.cardItems.push(action.payload);
            }
        } , 
        removeFromCard(state , action) {
            state.cardItems = [...state.cardItems.filter(item => item.id != action.payload.id)];
        }
    }
})



export default cardItems;