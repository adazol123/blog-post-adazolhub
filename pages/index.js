import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { background_wrap, background_text, wrapper } from '../styles/Custom.module.css'
import { 
  Accordion, 
  AccordionButton, 
  AccordionItem, 
  AccordionPanel, 
  Alert, 
  Button, 
  Flex, 
  Heading, 
  useColorMode, 
  useColorModeValue, 
  CircularProgress, 
  Progress,  
  useDisclosure,
  Fade,
  Box,
  Collapse,
  Lorem,
  useToast,
  Spacer,
  Center,
  AccordionIcon,
  Img,
  Text,
  Link,
} from '@chakra-ui/react'


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700")

  const { isOpen, onToggle } = useDisclosure()
  const toast = useToast()

  return (
    <Flex
      height="100vh"
      width='100vw'
      alignItems="center"
      justifyContent="center"
      direction="column"
      background={formBackground}
      pb={40}
      pt={40}
    >
      <Flex 
        position="absolute"
        top={0}
        direction="column"
        width="100vw"
        height='7vmin'
        background={formBackground}
        p={7}
        // rounded={10}
      >
        <Flex
        height='100vmin'
        justifySelf='center'
          alignItems='center'
          justifyContent='center'
        >
          <Button 
            // isLoading
            loadingText="Sending"
            spinnerPlacement="start"
            colorScheme="green" 
            variant="ghost"
            onClick={() => 
              toast({
                title: 'Test sucessfully sent!',
                status: 'success',
                isClosable: true,
                position: 'bottom-right',
                duration: 9000,
                variant: 'subtle',
                width: '20px'
              })
          }>Test</Button>
          <Spacer/>
          <Button 
            
            onClick={ toggleColorMode } 
            height='1vmin'
            width='5vmin'
            fontSize="1.3rem"
            rounded="2xl"
            
          > {colorMode === 'dark' ? '🌞': '🌙'} 
           </Button>

        </Flex>
          
      </Flex>
      
      <Img 
        src='/logo-main.svg'
        alt="adazolhub logo"
        boxSize='200px'
        mt={20}
        mb={4}
      />
      <Text fontSize={24} fontWeight='hairline' mb={4}> ADAZOLHUB </Text>
      <Spacer/>
      <NextLink href="/home">
        <Button 
          w='180px' 
          h='80px' 
          onClick={onToggle}
          variant='outline'
          colorScheme='teal'
            fontSize='0.9rem'
            px={20}
            py={5}
            mb={10}
            rounded={40}
        >  WELCOME </Button>
      </NextLink>

     
    </Flex>
  )
}
