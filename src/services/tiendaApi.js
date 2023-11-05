import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../firebase';

export const tiendaApi = createApi({
    reducerPath: 'tiendaApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getProducts: builder.query({
            query: () => 'products.json',
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order,
            }),
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetProductsQuery,
    usePostOrderMutation,
} = tiendaApi;
