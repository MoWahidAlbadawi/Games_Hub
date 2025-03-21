import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
  import { MdPhoneIphone } from 'react-icons/md';
  import { SiNintendo } from 'react-icons/si';
  import { BsGlobe } from 'react-icons/bs';
  import { HStack, Box } from "@chakra-ui/react";
  import Platform from "../Entities/Platform";
  interface Props {
    platforms: Platform[];
  }
  
  const PlatformIconList = ({ platforms = [] }: Props) => {
    const iconMap : {[key : string] : any} = { 
      pc: <FaWindows />,
      playstation: <FaPlaystation />,
      xbox: <FaXbox />,
      nintendo: <SiNintendo />,
      mac: <FaApple />,
      linux: <FaLinux />, 
      android: <FaAndroid />,
      ios: <MdPhoneIphone />,
      web: <BsGlobe />
    }
  
    return (
      <HStack marginY={1}> 
        {platforms.map((platform) => (
          <Box color={'gray.500'} key={platform.id}>{iconMap[platform.slug]}</Box>
        ))}
      </HStack>
    );
  };
  
  export default PlatformIconList;
  