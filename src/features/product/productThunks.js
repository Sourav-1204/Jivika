import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data } = await axios.get('https://dummyjson.com/products?limit=60');
    return data.products
})

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const { data } = await axios.get('https://dummyjson.com/products/categories');
    return data;
})