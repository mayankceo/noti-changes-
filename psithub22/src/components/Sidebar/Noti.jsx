import { Box, Link, Tooltip } from "@chakra-ui/react";



import { Link as RouterLink } from "react-router-dom";
import React from 'react';
import { Flex,Text } from '@chakra-ui/react';
import { GoHome } from "react-icons/go";




const Noti = () => {
  const [activeTab, setActiveTab] = React.useState('chat');
  return (
    <Tooltip hasArrow label={""} placement='right' ml={1} openDelay={500} display={{ base: "block", md: "none" }} >
      <Link 
        display={"flex"} 
        to="/notipage"  
        as={RouterLink} 
        alignItems={"center"} 
        gap={4} 
        borderRadius={6} 
        p={2} 
        w={{ base: 10, md: "full" }} 
        justifyContent={{ base: "center", md: "flex-start" }}
        borderTop={"0px solid #F0EDF5"}
        
        
      >
        <Link
        to="/notipage"
        as={RouterLink}
        onClick={() => setActiveTab('noti')}
        ml={"170px"}
      >
        <Flex flexDirection="column" alignItems="center">
          <GoHome size={"25px"} color={"#000"} />
          <Text fontSize={10} mt={1} color={"#000"}>Notification</Text>
        </Flex>
      </Link>
       
      </Link>
    </Tooltip>
  );
};

export default Noti;
