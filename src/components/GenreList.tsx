import { HStack, List , Image  , Button ,  Spinner , Heading} from "@chakra-ui/react";
import useGeneres from "../Hooks/useGeneres";

interface Props {
    onSelectedGenre : (genreId : number) => void,
    selectedGenreId? : number,
}

const GenreList = ({onSelectedGenre , selectedGenreId} : Props) => {
    const {data , isLoading , isError } = useGeneres();
    if(isLoading) return <Spinner size={'lg'}/>
    if(isError) return null;
    return <>
    <Heading>Genres</Heading>
    <List.Root listStyle={'none'}>
        {data?.results.map((genre) => <List.Item key={genre.id} paddingY={'10px'}>
            <HStack>
                <Image src={genre.image_background} borderRadius={'8px'} height='40px' width='40px'/>
                <Button fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} variant={'plain'} fontSize={'lg'} onClick={() => onSelectedGenre(genre.id)}>{genre.name}</Button>    
            </HStack>
        </List.Item>)}
        </List.Root>
        </>
}
export default GenreList;