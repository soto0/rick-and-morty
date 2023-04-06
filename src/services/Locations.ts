import { ILocations } from "@/models/ILocations";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const locationsAPI = createApi({
    reducerPath: 'locationsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (build) => ({
        getLocations: build.query<ILocations, void>({
            query: () => ({
                url: '/location'
            })
        })
    })
});