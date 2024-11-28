import { Heading } from "@chakra-ui/react";
import useGeneres from "../Hooks/useGeneres";
import useGameQueryStore from "../store/store";

const NameSectionGames = () => {
    const {data : genres} = useGeneres();
    const selectedGenreId =  useGameQueryStore(state => state.gameQuery.genreId);
    const selectedGenre = genres?.results.find((genre) => genre.id == selectedGenreId);
    let wordName = selectedGenre ? `${selectedGenre.name} Games` : 'Games';
    return <Heading mb={'15px'}  ml={'3px'} fontSize={'2xl'}>{wordName}</Heading>
}
export default NameSectionGames; 