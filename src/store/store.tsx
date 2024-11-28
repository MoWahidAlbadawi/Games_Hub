import { create } from "zustand";

export interface GameQuery { 
    genreId? : number,
    platformId? : number,
    sortOrder?: string;
    searchText?: string;
  }
  interface Store {
    gameQuery : GameQuery,
    setSearchText : (searchText : string) => void,
    setGenreId : (genreId : number) => void,
    setPlatformId : (platformId : number) => void,
    setSortOrder : (sortOrder : string) => void,
  }
  
const useGameQueryStore = create<Store>(set => ({
    gameQuery : {},
    setSearchText : (searchText) => set((store) => ({gameQuery : {...store.gameQuery , searchText}})), 
    setGenreId : (genreId) => set((store) => ({gameQuery : {...store.gameQuery , genreId}})),
    setPlatformId : (platformId) => set((store) => ({gameQuery : {...store.gameQuery , platformId}})),
    setSortOrder : (sortOrder) => set((store) => ({gameQuery : {...store.gameQuery , sortOrder}}))
}));
export default useGameQueryStore;