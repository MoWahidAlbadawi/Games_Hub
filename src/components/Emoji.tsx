import { Image, ImageProps} from "@chakra-ui/react";
import bullsEye from '../assets/bulls-eye.webp'
import thumbUp from '../assets/thumbs-up.webp' 

import meh from '../assets/meh.webp'
interface Props {
    rating : number,
}
const Emoji = ({rating} : Props) => {
    const imagesMap : {[key : number] : ImageProps } = {
        3 : {src : meh , alt : 'meh'},
        4 : {src : thumbUp , alt : 'thumbUp'},
        5 : {src : bullsEye , alt : 'bullsEye'},
    }
    if(rating < 3) return null
    return <Image {...imagesMap[rating]} width={'30px'} ml={2}/>
}
export default Emoji;