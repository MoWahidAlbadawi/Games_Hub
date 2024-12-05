import { Button, Text , Box } from "@chakra-ui/react"
import { useState } from "react"
interface Props {
    description : string,
}
const GameDescription = ({description} : Props) => {
    const [expandText , setExpandText] = useState(false);
    function toggleExpandText () {
        setExpandText((prev) => !prev);
    }
    if (description.length < 300)
        return <Text>{description}</Text>
        const summary = description.substring(0,300);
        return <Box>
            {expandText ? description : summary + ' ... ' }
            <Button variant={'solid'} colorPalette={'yellow'} padding={'10px'} height={'30px'}
            onClick={toggleExpandText}>{expandText ? 'Read less' : 'Read more'}</Button>
        </Box>
}
export default GameDescription;