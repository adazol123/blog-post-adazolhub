import { 
    Box,
    Button, 
    Flex, 
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Icon,
    Image,
    Img,
    Stack,
    HStack,
    Link,
    Avatar,
    MenuList,
    MenuButton,
    MenuItem,
    MenuDivider,
    Menu,
    IconButton,
    Text,
    Spacer, 
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";


const NavLink = ({ children } ) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      href='/'
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
    }  }>
      {children}
    </Link>
  );
const Links = ['Home', 'Blogs', 'Contact' ,' About'];

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return ( 
        <>
        <Box 
            bg={useColorModeValue('gray.100', 'gray.900')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            position='sticky'
            top='0'
        >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                size={'md'}
                icon={isOpen ? <Text>X</Text> :<Text> M </Text>}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />

                <HStack  spacing={8} alignItems={'center'}>
                    <Box >
                        <NextImage src='/logo.svg' height='60px'width='144px'/>
                    </Box>
                    
                </HStack>   
                {/* <Spacer/> */}
                <Flex alignItems={'center'}>
            <Menu>
            <HStack
                        // as={'nav'}
                        spacing={6}
                        pr={6}
                        justifyContent='flex-end'
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <NextLink href='/'>
                            <Button
                                px={5}
                                py='2px'
                                rounded={'md'}
                                variant="ghost"
                                _hover={{
                                  textDecoration: 'none',
                                  bg: useColorModeValue('green.200', 'green.700'),
                                }}
                                >
                                Home
                            </Button>
                        </NextLink>
                        <NextLink href='/'>
                            <Button
                                px={5}
                                py='2px'
                                rounded={'md'}
                                variant="ghost"
                                _hover={{
                                  textDecoration: 'none',
                                  bg: useColorModeValue('green.200', 'green.700'),
                                }}
                                >
                                Blogs
                            </Button>
                        </NextLink>
                        <NextLink href='/'>
                            <Button
                                px={5}
                                py='2px'
                                rounded={'md'}
                                variant="ghost"
                                _hover={{
                                  textDecoration: 'none',
                                  bg: useColorModeValue('green.200', 'green.700'),
                                }}
                                >
                                About
                            </Button>
                        </NextLink>
                        
                        
                    </HStack>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size='md'
                  src={
                    'https://images.unsplash.com/photo-1561637235-895323c40053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=50&w=50&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Theme</MenuItem>
                <MenuItem>Setings</MenuItem>
                <MenuDivider />
                <NextLink href='/'>
                  <MenuItem Item>Logout</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Flex>
            </Flex>
            {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        </Box>

        </>
     );
}
 
export default Navbar;