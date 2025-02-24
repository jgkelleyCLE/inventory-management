import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Api'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ()=> ({
                url: '/api/products',
                method: 'GET'
            }),
            providesTags: ['Api']
        })
    })
})

export const { useGetProductsQuery } = api