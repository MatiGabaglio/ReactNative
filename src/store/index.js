import { configureStore  } from '@reduxjs/toolkit'
import tiendaSlice from '../features/slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tiendaApi } from '../services/tiendaApi'
import cartSlice from '../features/cart/cartSlice.js'
import { authApi } from '../services/AuthApi.js'
import authSlice from '../features/Auth/AuthSlice.js'

const store = configureStore ({
  reducer: {
    tienda: tiendaSlice,
    cart: cartSlice,
    auth: authSlice,
    [tiendaApi.reducerPath]: tiendaApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tiendaApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export default store