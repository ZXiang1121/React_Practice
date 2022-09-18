import { configureStore} from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice';

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
    
// })


export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});




