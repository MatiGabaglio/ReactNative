import { configureStore  } from '@reduxjs/toolkit'
import tiendaSlice from '../features/slice'

export const store = configureStore ({
  reducer: {
    tienda: tiendaSlice,
  },
})