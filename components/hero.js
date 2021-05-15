import { 
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    useToast,
 } from "@chakra-ui/react";
import ModalSocial from "./modal";

const Herom = () => {
    const toast = useToast()
    return ( 
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
            'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
             <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'3xl'} align={'flex-end'} spacing={9}
            textAlign='end'
            p={10}
            wrap='wrap'
        >
          <Text
            mx='0'
            color={'white'}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '4xl' })}>
            Welcome to my personal website. Currently on building progress. You send me notificatio to my email for any suggestions or recommendation or even descrimination. I am open for any opinions.
          </Text>
          <Stack direction={'row'}>
            <Button
                fontWeight={600}
                fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}
                px={5}
                bg={'blackAlpha.600'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blackAlpha.900' }}
                onClick={() => 
                    toast({
                    title: 'Test sucessfully sent!',
                    status: 'success',
                    isClosable: true,
                    position: 'top-right',
                    duration: 9000,
                    variant: 'subtle',
                    width: '20px'
                    })}
            >
              Test Notify
            </Button>
            <ModalSocial/>

          </Stack>
        </Stack>
      </VStack>

        </Flex>
     );
}
 
export default Herom;