import { Box , Heading } from "@chakra-ui/react"
interface Props {
    term : string,
    children : React.ReactNode,
}
const GameAttributeItem = ({term , children} : Props) => {
    return <Box>
    <Heading color={'gray.600'}>{term}</Heading>
    {children}
  </Box>
 }
export default GameAttributeItem