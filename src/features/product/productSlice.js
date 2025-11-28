import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from './productThunks';

const initialState = {
    items: [],
    status: "idle",
    error: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => { state.status = 'loading'; state.error = null; })
            .addCase(fetchProducts.fulfilled, (state, action) => { state.status = "succeeded"; state.items = action.payload; })
            .addCase(fetchProducts.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message })
    }
})

export default productSlice.reducer;