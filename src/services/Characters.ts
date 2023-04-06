
import { ICharacter } from "@/models/ICharacter";
import { ICharacters } from "@/models/ICharacters";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const charactersAPI = createApi({
    reducerPath: 'charactersAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (build) => ({
        getCharacters: build.query<ICharacters[], { page: number | undefined, status: string | undefined, gender: string | undefined, name: string | undefined }>({
            query: ({ page, status, gender, name }) => ({
                url: '/character',
                params: {
                    page: page,
                    status: status,
                    gender: gender,
                    name: name
                }
            }),
        }),
        getCharacter: build.query<ICharacter[], number>({
            query: (id: number) => ({
                url: `/character/${id}`,
            })
        })
    })
});