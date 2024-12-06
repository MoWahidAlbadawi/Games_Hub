import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenShots from "../Hooks/useGameScreenShots";
interface Props {
    gameId : number,
}
const GameScreenShots = ({gameId} : Props) => {
    const {data : screenshots} = useGameScreenShots(gameId);
    return screenshots ? <SimpleGrid columns={{base : 1 , md : 2}}>
        {screenshots.results.map((screenshot) => <Image my={1} key={screenshot.id} src={screenshot.image} />)}
    </SimpleGrid> : null;
}
export default GameScreenShots;