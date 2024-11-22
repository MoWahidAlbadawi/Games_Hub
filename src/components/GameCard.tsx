import { Card, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformsIconsList from "./PlatformsIconsLost";
import CriticScore from "./CriticScore";
import getSmallerImage from "./GetSmallerImage";
import Emoji from "./Emoji";
interface Props {
    game : Game
}
const GameCard = ({ game } : Props) => {
    return <Card.Root height={{md:'400px' , lg : '350px'}}>
        <Image src={getSmallerImage(game.background_image)} />
        <Card.Body>
            <HStack justifyContent={'space-between'} padding={'10px'}>
            <PlatformsIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
                <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading ml={1}>{game.name}</Heading>
                <Emoji rating={game.rating_top}/>
        </Card.Body>
    </Card.Root>
}
export default GameCard;