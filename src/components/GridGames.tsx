import {  SimpleGrid, Text , Button} from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import GameCard from "./GameCard";
import SkeletonsCard from "./SkeletonsCard";
import GameCardContainer from "./GameCardConatainer";
import { GameQuery } from "../App";
import useGames from "../Hooks/useGames";
interface AxiosError {
    message : string,
}
interface Props {
    gameQuery : GameQuery
}
const GridGames = ({gameQuery} : Props) => {
    const {data , isLoading , isError , error , isFetchingNextPage , hasNextPage , fetchNextPage} = useGames(gameQuery);
    if(isLoading) return <SimpleGrid columns={{base : 1 , md : 2 , lg : 3}} gap={10}>
        {[1,2,3,4,5,6].map((skeleton) => <GameCardContainer key={skeleton}><SkeletonsCard/></GameCardContainer>)}
        </SimpleGrid>
    if(isError) return <Text>Error {(error as AxiosError)?.message} </Text>
    return <><SimpleGrid columns={{base : 1 , md : 2 , lg : 3}} gap={10}>
        {data?.pages.map((page) => <>
            {page.results.map((game : Game) => (<GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>))}
        </>)}
    </SimpleGrid>
    {hasNextPage && <Button onClick={() => fetchNextPage()} my={5} p='5px 15px'>{isFetchingNextPage ?  "Loading..." : 'Load More'}</Button>}
    </> 
}
export default  GridGames; 

