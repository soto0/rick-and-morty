export interface ILocation {
    map(arg0: (resident: any) => any): import("react").ReactNode;
    Location: ILocation[] | undefined,
    name: string,
    type: string,
    dimension: string,
    residents: any,
    id: number,
    status: string,
    species: string,
    url: string,
    image: string,
    location: ILocation
};