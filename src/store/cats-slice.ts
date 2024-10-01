import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCatsAPI, voteCatAPI } from '../api/cats-api';
import { ApiCat, Cat } from '../types/cat-types';

interface CatsState {
  cats: Cat[];
  loading: boolean;
  error: string | null;
  voting: boolean;
  voteError: string | null;
}

const initialState: CatsState = {
  cats: [],
  loading: false,
  error: null,
  voting: false,
  voteError: null,
};

export const fetchCats = createAsyncThunk<Cat[], void, {rejectValue: string}>(
  'cats/fetchCats',
  async (_, {rejectWithValue}) => {
    try {
      const data = await fetchCatsAPI();
      const cats: Cat[] = data.map((cat: ApiCat) => {
        const catBreed = cat.breeds ? cat.breeds[0] : null;
        return {
          id: cat.id,
          imageUrl: cat.url,
          name: catBreed?.name || 'Unknown',
          origin: catBreed?.origin || 'Unknown',
          affection: catBreed?.affection_level || 0,
        };
      });
      return cats;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

interface VoteArgs {
  imageId: string;
  value: number;
}

export const voteCat = createAsyncThunk<any, VoteArgs, {rejectValue: string}>(
  'cats/voteCat',
  async ({imageId, value}, {rejectWithValue}) => {
    try {
      const payload = {
        image_id: imageId,
        value: value,
      };
      const response = await voteCatAPI(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCats.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action: PayloadAction<Cat[]>) => {
        state.loading = false;
        state.cats = action.payload;
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch cats';
      });

    builder
      .addCase(voteCat.pending, state => {
        state.voting = true;
        state.voteError = null;
      })
      .addCase(voteCat.fulfilled, (state, _action) => {
        state.voting = false;
      })
      .addCase(voteCat.rejected, (state, action) => {
        state.voting = false;
        state.voteError = action.payload || 'Failed to submit vote';
      });
  },
});

export default catsSlice.reducer;
