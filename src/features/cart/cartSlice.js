import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: "userLogged",
    upDatedAt: Date.now().toLocaleString(),
    items : [],
    total: null,
}  

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeat = state.items.find((item) => item.id === action.payload.id);
            if (productRepeat) {
                const itemUpdated = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                        return item;
                    }
                    return;
                });
                const total = itemUpdated.reduce(
                    (acc, current) => (acc += current.precio * current.quantity), 
                )
                state = {
                    ...state,
                    items: itemUpdated,
                    total,
                    upDatedAt: new Date().toLocaleString(),
                };
            }
            else{
                state.items.push(action.payload);
                const total = state.items.reduce(
                    (acc, current) => (acc += current.precio * current.quantity), 
                )
                state = {
                    ...state,
                    total,
                    upDatedAt: new Date().toLocaleString(),
                };
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },

    },  
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;