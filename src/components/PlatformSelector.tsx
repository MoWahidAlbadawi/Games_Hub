import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu"
  import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatform";
import { Platform } from "../Hooks/useGames";

interface Props {
    onSelectedPlatform : (platfom : Platform) => void,
    selectedPlatform : Platform | null,
}
const PlatformSelector =  ({onSelectedPlatform , selectedPlatform} : Props) => {
    const {data , isError } = usePlatforms();
    if(isError) return null;
    return <MenuRoot>
        <MenuTrigger >
        <Button variant={'surface'} padding={'10px 20px'}>
           {selectedPlatform?.name || 'Platforms'} 
         <BsChevronDown />
        </Button>
        </MenuTrigger>
        <MenuContent>
            {data?.map((platform) => <MenuItem onClick={() => onSelectedPlatform(platform)} padding={'3px'} ml='3px' key={platform.id} value={platform.name}>{platform.name}</MenuItem>)}
        </MenuContent>
    </MenuRoot>
};
export default PlatformSelector;