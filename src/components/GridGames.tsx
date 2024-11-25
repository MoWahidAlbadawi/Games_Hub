import {  SimpleGrid, Text , Spinner} from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import GameCard from "./GameCard";
import SkeletonsCard from "./SkeletonsCard";
import GameCardContainer from "./GameCardConatainer";
import { GameQuery } from "../App";
import useGames from "../Hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
interface AxiosError {
    message : string,
}
interface Props {
    gameQuery : GameQuery
}

const GridGames = ({gameQuery} : Props) => {
    const {data , isLoading , isError , error , hasNextPage , fetchNextPage} = useGames(gameQuery);
    const countFetchingInfinitePages = data?.pages.reduce((total , page) => total + page.results.length,0) || 0;
    if(isLoading) return <SimpleGrid columns={{base : 1 , md : 2 , lg : 3}} gap={10}>
        {[1,2,3,4,5,6].map((skeleton) => <GameCardContainer key={skeleton}><SkeletonsCard/></GameCardContainer>)}
        </SimpleGrid>
    if(isError) return <Text>Error {(error as AxiosError)?.message} </Text>
    return <InfiniteScroll 
    dataLength={countFetchingInfinitePages}
    hasMore={!!hasNextPage}
    next={() => fetchNextPage()}
    loader={<Spinner m={'10px'}/>}>
    <SimpleGrid columns={{base : 1 , md : 2 , lg : 3}} gap={10}>
        {data?.pages.map((page) => <>
            {page.results.map((game : Game) => (<GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>))}
        </>)}
    </SimpleGrid>
    </InfiniteScroll>
}
export default  GridGames; 

