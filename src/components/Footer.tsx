import { Text , Box , Flex} from "@chakra-ui/react";
import MyPhoto from '../assets/Mohammad.jpg'
import { useColorMode } from "./ui/color-mode";
import { Avatar } from "./ui/avatar";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
const Footer = () => {
    const {colorMode} = useColorMode();
return <Flex as='footer' p={'25px'} bg={colorMode == 'dark' ? 'gray.900' : 'gray.100'} 
color={colorMode == 'dark' ? 'gray.400' : 'gray.600'} justifyContent={'space-around'}>
        <Box>
            <Flex gap={3}>
            <Box>
            <Avatar name='Mohammad Wahid Albadawi' src={MyPhoto} />
            </Box>
            <Box>
            <Text color={colorMode == 'dark' ? 'gray.300' : 'gray.900'} fontWeight={'semibold'} fontSize={{base : 'sm' , sm : 'md' , md : 'lg'}} mr='10px'>MOHAMMAD WAHID ALBADAWI</Text>
            <Text>ALL RIGHTS RESERVED</Text>
            </Box>
            </Flex>
        </Box>
        <Box>
            <Text color={colorMode == 'dark' ? 'gray.300' : 'gray.900'} fontWeight={'semibold'} mb={2} fontSize={{base : 'sm' , sm : 'md' , md : 'lg'}}>Contact Me</Text>
            <Flex gap={3}>
            <FaFacebook />
            <FaLinkedin />
            <FaTelegram />
            </Flex>
        </Box>
    </Flex>
}
export default Footer;