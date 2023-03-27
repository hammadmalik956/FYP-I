import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const nodeApi = createApi({
    reducerPath: "nodeApi",
    baseQuery: fetchBaseQuery({baseUrl: " http://localhost:4000/api"}),


    endpoints:(builder)=>({
        userLogin: builder.mutation({
            query: (body)=>({
                url:"/user/login",
                method: 'POST',
                body,
            })
        })
    })
})

export const {useUserLoginMutation} = nodeApi;