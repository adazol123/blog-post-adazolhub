import { Box, Button, Container, Flex, Image, useToast, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import Herom from "../components/hero";
import ModalSocial from "../components/modal";
import Navbar from "../components/navbarChakra";
import Social from "../components/socialCard";

const Home = () => {
    const toast = useToast()
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.200", "gray.700")

    return ( 
        <Box w='100vw'>
        <Navbar/>
        <Herom/>
        </Box>
        
     );
}
 
export default Home;