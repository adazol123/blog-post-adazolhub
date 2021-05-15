import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Lorem,
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Link,
    Badge,
    useColorModeValue,
  } from "@chakra-ui/react"
import Social from "./socialCard"

const ModalSocial = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <>
        <Button onClick={onOpen}
            p={5}
            bg={'green.500'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'green.300' }}
        >Show More</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered
            motionPreset="scale"
        >
          <ModalOverlay />
          <ModalContent 
            bg={useColorModeValue('white', 'gray.900')}
            my='auto'
            mx={10}
            p={0}
            rounded={'lg'}
          >
            <ModalCloseButton />
              <Social/>
          </ModalContent>
        </Modal>
      </>
     );
}
 
export default ModalSocial;