import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowVerify: false,
  phoneNumber: '',
  isShowAgreePopup: false,
  isShowSuccessMessage: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showVerifyPopup: (state, action) => {
      state.isShowVerify = action.payload;
    },
    getPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    showAgreePopup: (state, action) => {
      state.isShowAgreePopup = action.payload;
    },
    showSuccessMessage: (state, action) => {
      state.isShowAgreePopup = action.payload;
    },
  },
});

export const {
  showVerifyPopup,
  getPhoneNumber,
  showAgreePopup,
  showSuccessMessage,
} = authSlice.actions;

export default authSlice.reducer;
