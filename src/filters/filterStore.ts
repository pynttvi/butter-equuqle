import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './filterReducer.ts';


export const filterStore = configureStore({
    reducer: {
        reducer: filterReducer,  // Add the slice reducer to the store
    }
});

export default filterStore;