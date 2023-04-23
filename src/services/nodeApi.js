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
          addRoom: builder.mutation( {
            query: ( body ) => ( {
              url: '/room/createroom',
              method: 'POST',
              body,
              headers: {
                'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
              }
            } ),
            providesTags: [ 'Admin' ],
          } ),
          createInvigilator: builder.mutation( {
            query: ( body ) => ( {
              url: '/user/createuser',
              method: 'POST',
              body,
              headers: {
                'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
              }
            } ),
            providesTags: [ 'Admin' ],
          } ),
          getAllRooms: builder.query( {
            query: () => ( {
              url: '/room/getrooms',
              method: 'POST',
              headers: {
                'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
              }
            } ),
            providesTags: [ 'Admin' ],
          } ),
          getAllStudents: builder.query( {
            query: () => ( {
              url: '/student/getstudents',
              method: 'POST',
              headers: {
                'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
              }
            } ),
            providesTags: [ 'Admin' ],
          } ),
          getAllInvigilators: builder.query( {
            query: () => ( {
              url: '/user/get-invigilators',
              method: 'POST',
              headers: {
                'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
              }
            } ),
            providesTags: [ 'Admin' ],
          } ),
          createExam: builder.mutation( {
            query: ( body ) => ( {
              url: '/exam/createexam',
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

export const {useUserLoginMutation,useAddStudentMutation,useAddRoomMutation, useCreateInvigilatorMutation,useGetAllRoomsQuery,useGetAllStudentsQuery,useGetAllInvigilatorsQuery ,useCreateExamMutation} = nodeApi;