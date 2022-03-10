import { createSlice } from "@reduxjs/toolkit";

const color = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#400000",
  primaryBg: "bg-[#000000]",
  secondaryBg: "bg-[#FFFFFF]",
  tertiaryBg: "bg-[#FF5706]",
  primaryText: "text-[#000000]",
  secondaryText: "text-[#FFFFFF]",
  tertiaryText: "text-[#400000]",
};

const font = {
  text: "font-montserrat",
  title: "font-philosopher",
  art: "font-greatVibes",
};

const initialStateValue = {
  primaryColor: `${color.primary}`,
  secondaryColor: `${color.secondary}`,
  tertiaryColor: `${color.tertiary}`,
  primaryBgColor: `${color.primaryBg}`,
  secondaryBgColor: `${color.secondaryBg}`,
  tertiaryBgColor: `${color.tertiaryBg}`,
  primaryTextColor: `${color.primaryText}`,
  secondaryTextColor: `${color.secondaryText}`,
  tertiaryTextColor: `${color.tertiaryText}`,
  fontText: `${font.text}`,
  fontTitle: `${font.title}`,
  fontArt: `${font.art}`,
  paragraf: `${font.text} ${color.secondaryText} text-center text-[calc(10px+0.6vh)] sm:px-16 `,
  judul: `text-center ${color.secondaryText} ${font.title} font-semibold text-[calc(12px+2vh)]`,
  ayat: `${font.text} ${color.secondaryText} italic text-center text-[calc(9px+0.6vh)] leading-5 sm:px-10`,
  namaMempelai: `text-center ${color.secondaryText} ${font.art} text-[calc(20px+1.6vh)] `,
  thumb: `w-full h-full text-center pt-4 sm:pt-6`,
  thumbText: `text-sm sm:text-xl sm:mt-2 ${font.text}`,
  thumbActive: ` ${color.secondaryBg}  ${color.primaryText} `,
  thumbNonActive: ` ${color.primaryBg} ${color.secondaryText} `,
  button: `bg-gold ${color.primaryText}  hover:translate-y-1  transform px-4 py-2 rounded-lg font-montserrat sm:text-xl sm:px-6 sm:py-3 animate-beat`,
};

export const styleSnowCleanSlice = createSlice({
  name: "styleSnowClean",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setPrimaryColor: (state, action) => {
      state.value.color.primary = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.value.color.secondary = action.payload;
    },
    setTertiaryColor: (state, action) => {
      state.value.color.tertiary = action.payload;
    },
    setTextFont: (state, action) => {
      state.value.font.text = action.payload;
    },
    setTitleFont: (state, action) => {
      state.value.font.title = action.payload;
    },
    setArtFont: (state, action) => {
      state.value.font.art = action.payload;
    },
    setVarianMaroon: (state, action) => {
      state.value.primaryColor = "#800000";
      state.value.secondaryColor = "#FFFFFF";
      state.value.tertiaryColor = "#FFFFFF";
      state.value.primaryBgColor = "bg-[#800000]";
      state.value.secondaryBgColor = "bg-[#FFFFFF]";
      state.value.tertiaryBgColor = "bg-[#FFFFFF]";
      state.value.primaryTextColor = "text-[#800000]";
      state.value.secondaryTextColor = "text-[#FFFFFF]";
      state.value.tertiaryTextColor = "text-[#FFFFFF]";
      state.value.paragraf = `font-montserrat text-[#FFFFFF] text-center text-[calc(10px+0.6vh)] sm:px-16 `;
      state.value.judul = `text-center text-[#FFFFFF] font-philosopher font-semibold text-[calc(12px+2vh)]`;
      state.value.ayat = `font-montserrat text-[#FFFFFF] italic text-center text-[calc(9px+0.6vh)] leading-5 sm:px-10`;
      state.value.namaMempelai = `text-center text-[#FFFFFF] font-greatVibes text-[calc(20px+1.6vh)] `;
      state.value.thumbActive = ` bg-[#FFFFFF]  text-[#800000]`;
      state.value.thumbNonActive = ` bg-[#800000] text-[#FFFFFF] `;
      state.value.button = `bg-gold text-[#800000]  hover:translate-y-1  transform px-4 py-2 rounded-lg font-montserrat sm:text-xl sm:px-6 sm:py-3 animate-beat`;
    },
  },
});

export const {
  setPrimaryColor,
  setSecondaryColor,
  setTertiaryColor,
  setTextFont,
  setTitleFont,
  setArtFont,
  setVarianMaroon,
} = styleSnowCleanSlice.actions;

export default styleSnowCleanSlice.reducer;
