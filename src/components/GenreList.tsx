import { HStack, List , Image  , Button ,  Spinner , Heading} from "@chakra-ui/react";
import useGeneres, { Genre } from "../Hooks/useGeneres";

interface Props {
    onSelectedGenre : (genre : Genre) => void,
    selectedGenre : Genre | null,
}

const GenreList = ({onSelectedGenre , selectedGenre} : Props) => {
    const {data , isLoading , isError } = useGeneres();
    if(isLoading) return <Spinner size={'lg'}/>
    if(isError) return null;
    return <>
    <Heading>Genres</Heading>
    <List.Root listStyle={'none'}>
        {data?.map((genre) => <List.Item key={genre.id} paddingY={'10px'}>
            <HStack>
                <Image src={genre.image_background} borderRadius={'8px'} height='40px' width='40px'/>
                <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant={'plain'} fontSize={'lg'} onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>    
            </HStack>
        </List.Item>)}
        </List.Root>
        </>
}
export default GenreList;