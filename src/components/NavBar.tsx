import { HStack, Image , Box} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import SwitchColorMode from "./SwitchColorMode";
import SearchingBar from "./SearchingBar";

const NavBar = () => {
    return <><HStack padding={'10px 20px'} justifyContent={'space-between'}>
        <Image src={logo} height={'60px'}/>
        <Box width={'100%'} display={{base : 'none' , sm : 'block'}}><SearchingBar /></Box>
        <SwitchColorMode  />
    </HStack>
    <Box width={'100%'} padding={'10px 20px'} display={{base : 'block' , sm : 'none'}}><SearchingBar /></Box>
    </>
}
export default NavBar;