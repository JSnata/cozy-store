import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
    cupcake: 'cupcake',
    coffee: 'coffee'
}

const getThemeFromLocalStorage = () => {
    
    const theme = localStorage.getItem('theme') || themes.cupcake;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
}

const initialState = {
    user: { username: 'nata'}, 
    theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({name: 'user', initialState, reducers: {
    loginUser: (state, action) => {
        console.log('login');
    },
    logoutUser: (state) => {

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