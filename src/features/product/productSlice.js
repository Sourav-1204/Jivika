import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchCategories } from './productThunks';

const initialState = {
    items: [],
    categories: [],
    currentCategory: "",
    loadingProducts: false,
    loadingCategories: false,
    errorProducts: null,
    errorCategories: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        setCurrentCategory: (state, action) => {
            const category = action.payload;
            if (category !== state.currentCategory) {
                state.currentCategory = category;
            } else {
                state.currentCategory = "";
            }
        }
    },
    extraReducers: (builder) => {
        //products
        builder.addCase(fetchProducts.pending, (state) => {
            state.loadingProducts = true;
            state.errorProducts = null;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loadingProducts = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loadingProducts = false;
                state.errorProducts = action.error.message;
            });


        //categories
        builder.addCase(fetchCategories.pending, (state) => {
            state.loadingCategories = true;
            state.errorCategories = null;
        })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loadingCategories = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loadingCategories = false;
                state.errorCategories = action.error.message;
            });

    }
})

export const { setCurrentCategory } = productSlice.actions;
export default productSlice.reducer;