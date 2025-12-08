import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchCategories, fetchProductsByCategories } from './productThunks';

const initialState = {
    items: [],
    categories: [],
    filteredProducts: [],
    temp: [],
    loadingFilteredProducts: false,
    currentCategory: "",
    loadingProducts: false,
    loadingCategories: false,
    errorProducts: null,
    errorCategories: null,
    errorFilteredProducts: null
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
                state.filteredProducts = state.items;
            }
        },
        sortProducts: (state, action) => {
            const { sortParam, sortOrder } = action.payload;
            console.log(sortParam, sortOrder, "lohcall")
            if (sortParam) {
                state.temp = state.filteredProducts;
                state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
                    return sortOrder === "asc" ? a[sortParam] - b[sortParam] : b[sortParam] - a[sortParam];
                });
            } else if (state.currentCategory) {
                state.filteredProducts = state.temp;
            } else {
                state.filteredProducts = state.items;
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
                state.filteredProducts = action.payload;
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

        //get products by category
        builder.addCase(fetchProductsByCategories.pending, (state) => {
            state.loadingFilteredProducts = true;
            state.errorFilteredProducts = null;
        })
            .addCase(fetchProductsByCategories.fulfilled, (state, action) => {
                state.loadingFilteredProducts = false;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchProductsByCategories.rejected, (state, action) => {
                state.loadingFilteredProducts = false;
                state.errorFilteredProducts = action.error.message
            })
    }
})

export const { setCurrentCategory, getFilteredProducts, sortProducts } = productSlice.actions;
export default productSlice.reducer;