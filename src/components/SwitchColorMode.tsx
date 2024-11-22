import { HStack , Text} from "@chakra-ui/react";
import { Switch } from "./ui/switch";
import { useColorMode } from "./ui/color-mode";
const SwitchColorMode = () => {
    const {toggleColorMode , colorMode} = useColorMode();
    return <HStack>
        <Switch checked = {colorMode === 'dark'} onChange={toggleColorMode} colorPalette={'green'}></Switch>
        <Text whiteSpace={'nowrap'}>Dark mode</Text>
    </HStack>
}
export default SwitchColorMode;