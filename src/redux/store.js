import  reducer from './reducers/auth'// Make sure this path is correct
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    auth: reducer,
  },
});

export default store;

// import reducer from './path/to/authSlice'; // Make sure this path is correct
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: {
//     auth: reducer,
//   },
// });

// export default store;
