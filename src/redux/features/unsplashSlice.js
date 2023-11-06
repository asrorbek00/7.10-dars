import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedPhotos: [],
  theme: "light",
  user: null,
};

const unsplashSlice = createSlice({
  name: "unsplash",
  initialState,
  reducers: {
    addLikedPhotos: (state, { payload }) => {
      const isImageAlreadyAdded = state.likedPhotos.every((image) => {
        return image.id !== payload.id;
      });
      if (isImageAlreadyAdded) {
        state.likedPhotos = [...state.likedPhotos, payload];
      }
    },
    addUser: (state , {payload}) =>{
      state.user = payload
    },
    removeUser: (state) =>{
      state.user = null
    }
  },
});
export const { addLikedPhotos , addUser , removeUser } = unsplashSlice.actions;
export default unsplashSlice.reducer;
