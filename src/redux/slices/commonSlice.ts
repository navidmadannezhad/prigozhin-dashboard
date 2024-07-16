import { ThemeState } from '@models/models';
import { createSlice } from '@reduxjs/toolkit'

interface StateType {
    themeState: ThemeState;
}

const initialState: StateType = { 
    themeState: "light"
}

const commonSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setThemeState: (state, action) => {
        state.themeState = action.payload;
    }
  },
})

export const { 
    setThemeState
} = commonSlice.actions
export default commonSlice.reducer