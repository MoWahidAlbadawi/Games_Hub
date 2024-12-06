import { Card, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformsIconsList from "./PlatformsIconsLost";
import CriticScore from "./CriticScore";
import getSmallerImage from "./GetSmallerImage";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
interface Props {
    game : Game
}
const GameCard = ({ game } : Props) => {
    return <Card.Root className="card-game" height={{base : '360px' , md:'400px' , lg : '310px', xl : '350px'}}>
        <Image src={getSmallerImage(game.background_image)} />
        <Card.Body pl={'9px'}>
            <HStack justifyContent={'space-between'} padding={'10px'}>
            <PlatformsIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
                <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading ml={1}><Link to={`/games/${game.slug}`}>{game.name}</Link></Heading>
                <Emoji rating={game.rating_top}/>
        </Card.Body>
    </Card.Root>
}
export default GameCard;