import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65013f5b736d26322f5b6e43.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'advert/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/advert?page=${page}&limit=8`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
