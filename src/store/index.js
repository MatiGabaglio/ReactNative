import { configureStore  } from '@reduxjs/toolkit'
import tiendaSlice from '../features/slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tiendaApi } from '../store/tiendaApi'

const store = configureStore ({
  reducer: {
    tienda: tiendaSlice,
    [tiendaApi.reducerPath]: tiendaApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tiendaApi.middleware)
})

setupListeners(store.dispatch)

export default store