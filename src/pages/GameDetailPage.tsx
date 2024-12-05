import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Box , Heading } from "@chakra-ui/react";
import GameDescription from "../components/GameDescription";
const GameDetailPage = () => {
    const {slug} = useParams();
    const {data : game} = useGame(slug!);

    return <Box padding={2}>
        <Heading>{game?.name}</Heading>
        <GameDescription description={game?.description || ''}/>
    </Box>
}
export default GameDetailPage;