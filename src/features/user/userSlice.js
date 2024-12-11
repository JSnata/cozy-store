import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
    cupcake: 'cupcake',
    coffee: 'coffee'
}

const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || null;
}

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.cupcake;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
}

const initialState = {
    user: getUserFromLocalStorage(), 
    theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({name: 'user', initialState, reducers: {
    loginUser: (state, action) => {
        const user = { ...action.payload.user, token:action.payload.jwt };
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser: (state) => {
        state.user = null;
        // localStorage.clear()
        localStorage.removeItem('user');
        toast.success('Logged out successfully');
    },
    toggleTheme: (state) => {
        console.log('hey');
        
        const { cupcake, coffee } = themes;
        state.theme = state.theme === cupcake ? coffee : cupcake;
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
    }
}});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;