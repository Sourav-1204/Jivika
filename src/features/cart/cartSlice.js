import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/cartHelper"

const initialState = {
    cartItems: getFromLocalStorage("cartItems") || [],
    count: getFromLocalStorage("count") || 0,
    subTotal: getFromLocalStorage("subTotal") || 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cartItems.find(item => item.id === product.id);
            if (existingItem && existingItem.quantity === 9) return;
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...product, quantity: 1 });
            }
            recompute(state);
            saveToLocalStorage("cartItems", state.cartItems);
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            if (!id) return;

            const index = state.cartItems.findIndex(item => item.id === id);
            if (index === -1) return;

            const item = state.cartItems[index];

            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems.splice(index, 1); // remove item
            }

            recompute(state);
            saveToLocalStorage("cartItems", state.cartItems);
        },
        setQty: (state, action) => {
            const { id, qty } = action.payload;
            const index = state.cartItems.findIndex(item => item.id === id);
            if (index === -1) return;
            const safeQty = Math.max(0, Math.min(qty, 9));
            if (safeQty === 0) {
                state.cartItems.splice(index, 1); // remove item
            } else {
                state.cartItems[index].quantity = safeQty; // update quantity
            }
            recompute(state);
            saveToLocalStorage("cartItems", state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.count = 0;
            state.subTotal = 0;
            recompute(state);
            saveToLocalStorage("cartItems", state.cartItems);
        },
    }
})

function recompute(state) {
    const entries = state.cartItems;
    state.count = entries.reduce((acc, it) => acc + it.quantity, 0);
    saveToLocalStorage("count", state.count);
    state.subTotal = entries.reduce((acc, it) => acc + it.quantity * (it.price || 0), 0);
    saveToLocalStorage("subTotal", state.subTotal);
}

export const { addToCart, removeFromCart, setQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
