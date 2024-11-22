import { Badge } from "@chakra-ui/react";

interface Props {
    score : number,
}
const CriticScore = ({score} : Props) => {
    const color = score > 75 ? 'green.500' : score > 60 ? 'yellow' : '';
    return  <Badge  paddingX={2} fontSize={'15px'} color={color}>{score}</Badge>

}
export default CriticScore;