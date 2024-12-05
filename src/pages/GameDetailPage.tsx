import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Box , Heading } from "@chakra-ui/react";
import GameDescription from "../components/GameDescription";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
const GameDetailPage = () => {
    const {slug} = useParams();
    const {data : game} = useGame(slug!);
    
    return game ? <Box padding={'10px 20px'}>
        <Heading>{game?.name}</Heading>
        <GameDescription description={game.description}/>
        <GameAttributes game={game} />
        <GameTrailer gameId={game.id}  />
    </Box> : null;
}
export default GameDetailPage;