import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//Todo create .env
export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: () => ({})
})