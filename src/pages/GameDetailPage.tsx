import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Box , Heading, SimpleGrid , Text , Spinner} from "@chakra-ui/react";
import GameDescription from "../components/GameDescription";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";
import ErrorConfig from "../Entities/ErrorConfig";
const GameDetailPage = () => {
    const {slug} = useParams();
    const {data : game , isLoading , isError , error} = useGame(slug!);
    if(isError) return <Text textAlign={'center'}>{(error as ErrorConfig)?.message}</Text>
    if(isLoading) return <Box textAlign={'center'}>
        <Text>Loading...</Text>
        <Spinner />
    </Box>
    return game ? <Box padding={'10px 20px'}>
        <Heading>{game?.name}</Heading>
        <SimpleGrid columns={{base : 1 , md : 2}}>
        <Box>
        <GameDescription description={game.description}/>
        <GameAttributes game={game} />
        </Box>
        <Box>
        <GameTrailer gameId={game.id}  />
        <GameScreenShots gameId={game.id} />
        </Box>
        </SimpleGrid>
    </Box> : null;
}
export default GameDetailPage;