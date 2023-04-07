import { IEpisodes } from "@/models/IEpisodes";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const episodesAPI = createApi({
    reducerPath: 'episodesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (build) => ({
        getEpisodes: build.query<IEpisodes, number>({
            query: (page) => ({
                url: '/episode',
                params: {
                    page: page
                }
            })
        })
    })
});