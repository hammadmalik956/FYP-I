import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

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
        }),

        addStudent: builder.mutation( {
            query: ( body ) => ( {
              url: '/student/createstudent',
              method: 'POST',
              body,
              headers: {
                'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
              }
            } ),
            providesTags: [ 'Admin' ],
          } ),
    })
})

export const {useUserLoginMutation,useAddStudentMutation} = nodeApi;