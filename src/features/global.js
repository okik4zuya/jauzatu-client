import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  loading: true,
  invited: "Nama Tamu",
  playing: false,
  slide: 1,
  newSlug: "",
  editMode: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setLoading: (state, action) => {
      state.value.loading = !state.value;
    },
    setInvited: (state, action) => {
      state.value.invited = action.payload;
    },
    setPlaying: (state, action) => {
      state.value.playing = !state.value.playing;
    },
    setSlide: (state, action) => {
      state.value.slide = action.payload;
    },
    setNewSlug: (state, action) => {
      state.value.newSlug = action.payload;
    },
  },
});

export const { setLoading, setInvited, setPlaying, setSlide, setNewSlug } =
  globalSlice.actions;

export default globalSlice.reducer;
