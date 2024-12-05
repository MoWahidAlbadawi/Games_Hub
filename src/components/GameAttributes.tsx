import { Game, Publisher } from "../Hooks/useGames";
import { Genre } from "../Hooks/useGeneres";
import CriticScore from "./CriticScore";
import GameAttributeItem from "./GameAttributeItem";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
    game? : Game;
}
const GameAttributes = ({game} : Props) => {
    
    return <SimpleGrid columns={2} marginY={5} gap={'40px'}>
    <GameAttributeItem term={'Platforms'}>
        {game?.parent_platforms.map((p) => <Text key={p.platform.id}>{p.platform.name}</Text>)}
    </GameAttributeItem>
    <GameAttributeItem term={'Metascore'}>
        <CriticScore score={game?.metacritic || 0} />
    </GameAttributeItem>
    <GameAttributeItem term={'Genres'}>
        {game?.genres.map((genre : Genre) => <Text key={genre.id}>{genre.name}</Text>)}
    </GameAttributeItem>
    <GameAttributeItem term={'Publishers'}>
        {game?.publishers.map((publisher : Publisher) => <Text key={publisher.id}>{publisher.name}</Text>)}
    </GameAttributeItem>
    </SimpleGrid>
}
export default GameAttributes;