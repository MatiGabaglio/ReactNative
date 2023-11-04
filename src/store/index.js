import { configureStore  } from '@reduxjs/toolkit'
import tiendaSlice from '../features/slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tiendaApi } from '../services/tiendaApi'
import cartSlice from '../features/cart/cartSlice.js'

const store = configureStore ({
  reducer: {
    tienda: tiendaSlice,
    cart: cartSlice,
    [tiendaApi.reducerPath]: tiendaApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tiendaApi.middleware)
})

setupListeners(store.dispatch)

export default store