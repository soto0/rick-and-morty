
import { ICharacters } from "@/models/ICharacters";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const charactersAPI = createApi({
    reducerPath: 'charactersAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (build) => ({
        getCharacters: build.query<ICharacters[], any>({
            query: ({ page, status, gender, name }) => ({
                url: '/character',
                params: {
                    page: page,
                    status: status,
                    gender: gender,
                    name: name
                }
            }),
        })
    })
});