import { createSlice } from '@reduxjs/toolkit'

interface StateType {
    accessToken: string | null;
    refreshToken: string | null;
    shouldLogout: boolean;

    first_name: string | null;
    last_name: string | null;
    full_name: string | null;
    email: string | null;
    phone_number: string | null;
    userId: string | number | null;
}

const initialState: StateType = { 
    accessToken: null,
    refreshToken: null,
    shouldLogout: false,

    first_name: null,
    last_name: null,
    full_name: null,
    email: null,
    phone_number: null,
    userId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
        state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
        state.refreshToken = action.payload;
    },
    setShouldLogout: (state, action) => {
      state.shouldLogout = action.payload;
    },
    resetAuthState: (state) => {
        return initialState;
    },
  },
})

export const { 
  setAccessToken, 
  setRefreshToken, 
  setShouldLogout, 
  resetAuthState,
} = authSlice.actions
export default authSlice.reducer