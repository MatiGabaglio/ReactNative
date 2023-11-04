import { createSlice } from "@reduxjs/toolkit"
import categorias from "../globals/categorieData.js"
import ProductData from "../globals/productsData.js"

const initialState = {  
    categorias: categorias,
    productos: ProductData,
    productosFiltrados: [],
    categoriaSeleccionada: null,
    productoSeleccionado: null,
} 

export const tiendaSlice = createSlice({
    name: "tienda",
    initialState,
    reducers: {
        setCategoriaSeleccionada: (state, action) => {
            state.categoriaSeleccionada = action.payload
        },
        setProductoSeleccionado: (state, action) => {
            state.productoSeleccionado = action.payload        
        },
    }
})

export const { setCategoriaSeleccionada, setProductoSeleccionado } = tiendaSlice.actions
export default tiendaSlice.reducer
