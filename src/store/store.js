import {configureStore} from '@reduxjs/toolkit';
import authSlice from './AuthSlice'
import themeSlice from './ThemeSlice';

export const store = configureStore({
    reducer:{
        user:authSlice,
        theme:themeSlice
    }
    
})

