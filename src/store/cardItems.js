
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
                    } else {
                        return item;
                    }
                })

                // add Items to localStorage
                localStorage.setItem('cartItems' , JSON.stringify(state.cardItems));

            } else {
                state.cardItems.push(action.payload);
                // add Items to localStorage
                localStorage.setItem('cartItems' , JSON.stringify(state.cardItems));
            }
        } , 
        removeFromCard(state , action) {
            state.cardItems = [...state.cardItems.filter(item => item.id != action.payload)];
            if( state.cardItems.length == 0 ) {
                localStorage.removeItem('cartItems');
            }else {
               // update Items list in localStorage
               localStorage.setItem('cartItems' , JSON.stringify(state.cardItems));
            }
        },
        editQuanityItem(state , action) {
            state.cardItems = state.cardItems.map(item => {
                if ( item.id == action.payload.id ) {
                    // if the new quantity is less than 0 then make it 1 otherwhise the user should remove the item from the card
                    return action.payload.quanity <= 0 ? { ...item , quanity : 1} : { ...item , quanity : action.payload.quanity}
                } else {
                    return item;
                }
            })
             // add Items to localStorage
             localStorage.setItem('cartItems' , JSON.stringify(state.cardItems));
        } ,
        cartItemsFromLocalStorage(state , action) {
            state.cardItems = [...action.payload];
        }
    }
})


export const getItemsFromLocalStorage = () => {
    return (dispatch) => {
        if ( localStorage.getItem("cartItems") && localStorage.getItem('cartItems')) {
            const cartItems =  localStorage.getItem("cartItems");
            console.log("cartItems" , cartItems.length)
            dispatch(cardItems.actions.cartItemsFromLocalStorage(JSON.parse(cartItems)));
        } 
    }
}


export const actions = cardItems.actions; 

export default cardItems;