import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";
const SkeletonsCard = () => {
    return <Card.Root minWidth='300px'>
           <Skeleton height="200px" />
           <Card.Body>
           <SkeletonText />
           </Card.Body>
    </Card.Root>
}
export default SkeletonsCard;