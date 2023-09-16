import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65013f5b736d26322f5b6e43.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
