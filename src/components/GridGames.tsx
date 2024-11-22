import {  SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useGames from "../Hooks/useGames";
import { Game } from "../Hooks/useGames";
import GameCard from "./GameCard";
import SkeletonsCard from "./SkeletonsCard";
import GameCardContainer from "./GameCardConatainer";
import { GameQuery } from "../App";
interface AxiosError {
    message : string,
}
interface Props {
    gameQuery : GameQuery
}
const GridGames = ({gameQuery} : Props) => {
    const [games , setGames] = useState<Game []>([]);
    const {data , isLoading , isError , error , refetch} = useGames(gameQuery);
    useEffect(() => {
        refetch();
    },[gameQuery])
    useEffect (() => {
        if(data) setGames(data);
    },[data])
    if(isLoading) return <SimpleGrid columns={{base : 1 , md : 2 , lg : 3}} gap={10}>
        {[1,2,3,4,5,6].map((skeleton) => <GameCardContainer key={skeleton}><SkeletonsCard/></GameCardContainer>)}
        </SimpleGrid>
    if(isError) return <Text>Error {(error as AxiosError)?.message} </Text>
return <SimpleGrid columns={{base : 1 , md : 2 , lg : 3}} gap={10}>
    {games.map((game) => (<GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>))}
</SimpleGrid>
}
export default  GridGames; 

