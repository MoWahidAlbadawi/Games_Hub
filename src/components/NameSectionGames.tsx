import { Heading } from "@chakra-ui/react";
import { Genre } from "../Hooks/useGeneres";
interface Props {
    selectedGenre : Genre | null,
}
const NameSectionGames = ({selectedGenre} : Props) => {
    let wordName = selectedGenre ? `${selectedGenre.name} Games` : 'Games';
    return <Heading mb={'15px'}  ml={'3px'} fontSize={'2xl'}>{wordName}</Heading>
}
export default NameSectionGames; 