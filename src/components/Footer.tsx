import { Text , Box , Flex , Link} from "@chakra-ui/react";
import MyPhoto from '../assets/Mohammad.jpg'
import { useColorMode } from "./ui/color-mode";
import { Avatar } from "./ui/avatar";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
const Footer = () => {
    const {colorMode} = useColorMode();
return <Flex as='footer' p={'25px 20px'} bg={colorMode == 'dark' ? 'gray.900' : 'gray.100'} 
color={colorMode == 'dark' ? 'gray.400' : 'gray.600'} justifyContent={'space-around'}>
        <Box>
            <Flex gap={3}>
            <Box>
            <Avatar name='Mohammad Wahid Albadawi' src={MyPhoto} />
            </Box>
            <Box>
            <Text color={colorMode == 'dark' ? 'gray.300' : 'gray.900'} fontWeight={'semibold'} fontSize={{base : 'sm' , sm : 'md' , md : 'lg'}} mr='15px'>MOHAMMAD WAHID ALBADAWI</Text>
            <Text>ALL RIGHTS RESERVED</Text>
            </Box>
            </Flex>
        </Box>
        <Box>
            <Text color={colorMode == 'dark' ? 'gray.300' : 'gray.900'} fontWeight={'semibold'} mb={2} ml={{base : '-10px' , sm : '-20px'}} fontSize={{base : 'sm' , sm : 'md' , md : 'lg'}} textAlign={'center'}>CONTACT ME</Text>
            <Flex gap={3}>
            <Link href="https://www.facebook.com/mohammad.albadawi.77312?mibextid=ZbWKwL"><FaFacebook /></Link>
            <Link href="https://www.linkedin.com/in/mohammad-wahid-albadawi-8a8646312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></Link>
            <Link href="https://t.me/MWahid7"><FaTelegram /></Link>
            </Flex>
        </Box>
    </Flex>
}
export default Footer;