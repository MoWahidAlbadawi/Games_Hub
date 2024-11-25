import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu"
  import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatform";
interface Props {
    onSelectedPlatformId : (platfomId : number) => void,
    selectedPlatformId? : number,
}
const PlatformSelector =  ({onSelectedPlatformId , selectedPlatformId} : Props) => {
    const {data , isError } = usePlatforms();
    const selectedPlatform = data?.results.find((platform) => platform.id == selectedPlatformId);
    if(isError) return null;
    return <MenuRoot>
        <MenuTrigger >
        <Button variant={'surface'} padding={'10px 20px'}>
           {selectedPlatform?.name || 'Platforms'} 
         <BsChevronDown />
        </Button>
        </MenuTrigger>
        <MenuContent>
            {data?.results.map((platform) => <MenuItem onClick={() => onSelectedPlatformId(platform.id)} padding={'7px 10px'} ml='3px' key={platform.id} value={platform.name}>{platform.name}</MenuItem>)}
        </MenuContent>
    </MenuRoot>
};
export default PlatformSelector;