import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/* import data from "../../components/data"; */

const url = 'https://restcountries.com/v3.1/all';

export const countryItems = createAsyncThunk('country', async () => {
    const response = await fetch(url);
    const result = await response.json();

    const countryItemData = result.map((item) => ({
        name: item.name.common,
        capital: item.capital,
        continent: item.continents[0],
        flag: item.flags.png,
        population: item.population,
        map: item.maps.googleMaps,
        area: item.area,
        
        })); 
        
    return countryItemData;
  });





const initialState = {
    countryData: [],
    loading: false,
    error: null,
};

const countrySlice = createSlice({
 name: 'country',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
    builder
      .addCase(countryItems.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(countryItems.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countryData: action.payload,
      }))
      .addCase(countryItems.rejected, (state) => ({
        ...state,
        loading: true,
      }));
  },
});

export default countrySlice.reducer;