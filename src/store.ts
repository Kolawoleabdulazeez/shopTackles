import { configureStore } from '@reduxjs/toolkit';
import bugsSliceReducer from './features/bugSlice';
import modalReducer from "./features/modalSlice";
import sectionReducer from "./features/Sectionslice"
import cartReducer from "./features/cartSlice";


 const store = configureStore({
    reducer:{
      bugs: bugsSliceReducer,
          cart: cartReducer,
      modal:modalReducer,
      section: sectionReducer,
    }
 })

 export default store;

  export type RootState = ReturnType<typeof store.getState>
