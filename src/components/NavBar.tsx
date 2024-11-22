import { HStack, Image , Box} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import SwitchColorMode from "./SwitchColorMode";
import SearchingBar from "./SearchingBar";
interface Props {
    onSearch : (searchText : string) => void;
}
const NavBar = ({onSearch} : Props) => {
    return <><HStack padding={'10px 20px'} justifyContent={'space-between'}>
        <Image src={logo} height={'60px'}/>
        <Box width={'100%'} display={{base : 'none' , sm : 'block'}}><SearchingBar onSearch={(searchText) => onSearch(searchText)}/></Box>
        <SwitchColorMode  />
    </HStack>
    <Box width={'100%'} padding={'10px 20px'} display={{base : 'block' , sm : 'none'}}><SearchingBar onSearch={(searchText) => onSearch(searchText)}/></Box>
    </>
}
export default NavBar;