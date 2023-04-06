export interface ICharacter {
    character: ICharacter[] | undefined,
    name: string,
    image: string,
    status: string,
    species: string,
    origin: ICharacter,
    location: ICharacter,
    url: string,
};