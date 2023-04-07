import { ILocation } from "@/models/ILocation";
import { ILocations } from "@/models/ILocations";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const locationsAPI = createApi({
    reducerPath: "locationsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
    endpoints: (build) => ({
        getLocations: build.query<ILocations, number>({
            query: (page) => ({
                url: "/location",
                params: {
                    page: page
                }
            })
        }),
        getLocation: build.query<ILocation, number>({
            query: (id: number) => ({
                url: `location/${id}`,
            }),
        }),
        getResidents: build.query<ILocation, number[]>({
            query: (ids: number[]) => ({
                url: `character/${ids.join(",")}`
            })
        })
    })
});