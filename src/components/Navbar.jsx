import { useState } from 'react';
import {
    Box,
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Flex,
    Image,
    Link,
    useColorMode,
    useMediaQuery
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const DesktopNav = ({ colorMode, toggleColorMode, isLoggedIn, onLogin, onLogout }) => (
    <Flex
        as='nav'
        align='center'
        justify='space-between'
        padding='0.5rem'
        bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'
        }
        color='white'
        position='sticky'
        top='0'
        zIndex='100'
    >
        <Flex>
            <Image src={colorMode === 'light' ? '/logo1.png' : '/logo2.png'} alt='Insolvent.ai Logo' boxSize='15px' mt='6px' mr='3px' />
            <Link
                as={NextLink}
                aria-label='Insolvent.ai Logo'
                color={colorMode === 'light' ? 'black' : 'white'}
                variant='ghost'
                fontWeight={'bold'}
                href='/'>
                Insolvent.ai
            </Link>
        </Flex>

        <Box>
            <Flex align={'center'}>
                <Button
                    onClick={toggleColorMode}
                    variant='ghost'
                    mr='4'
                >{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>

                {isLoggedIn ? (
                    <Button
                        aria-label='sign out'
                        onClick={onLogout}
                        variant='ghost'
                    >Sign Out</Button>
                ) : (
                    <Link as={NextLink} href="/signin">
                        <Button
                            aria-label='sign in'
                            onClick={onLogin}
                            variant='ghost'
                        >Sign In</Button>
                    </Link>
                )
                }
            </Flex>
        </Box>
    </Flex >
)

const MobileNav = ({ colorMode, toggleColorMode, isLoggedIn, onLogin, onLogout, isOpen, onClose }) => {
    let screenWidth = window.innerWidth;
    function handleResize() {
        screenWidth = window.innerWidth;
    }

    // Initial call to set the initial screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            padding='0.5rem'
            bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}
            color='white'
            position='sticky'
            top='0'
            zIndex='100'
        >
            <Flex align='center' justify='space-between'>
                <Button
                    aria-label='Open Menu'
                    variant='ghost'
                    onClick={onClose}
                >
                    <HamburgerIcon />
                </Button>

                <Flex align='center' justify='center' flex='1'>
                    <Image
                        src={colorMode === 'light' ? '/logo1.png' : '/logo2.png'}
                        alt='Insolvent.ai Logo'
                        boxSize='15px'
                        mt='6px'
                        mr='3px'
                        ml={screenWidth / 3.5} />
                    <Link
                        as={NextLink}
                        aria-label='Insolvent.ai Logo'
                        color={colorMode === 'light' ? 'black' : 'white'}
                        variant='ghost'
                        fontWeight='bold'
                        href='/'
                    >
                        Insolvent.ai
                    </Link>
                </Flex>

                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <Flex direction='column' align='center'>
                                {isLoggedIn ? (
                                    <Button
                                        aria-label='Sign Out'
                                        onClick={onLogout}
                                        variant='ghost'
                                        mt={3}
                                    >
                                        Sign Out
                                    </Button>
                                ) : (
                                    <Link as={NextLink} href='/signin'>
                                        <Button
                                            aria-label='Sign In'
                                            onClick={onLogin}
                                            variant='ghost'
                                            mt={3}
                                        >
                                            Sign In
                                        </Button>
                                    </Link>
                                )}
                                <Button
                                    onClick={toggleColorMode}
                                    variant='ghost'
                                    mt={3}
                                >
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Flex>
    );
}


const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <>
            {isMobile ? (
                <MobileNav
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                    isLoggedIn={isLoggedIn}
                    onLogin={onLogin}
                    onLogout={onLogout}
                    isOpen={isMobileNavOpen}
                    onClose={toggleMobileNav}
                />
            ) : (
                <DesktopNav
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                    isLoggedIn={isLoggedIn}
                    onLogin={onLogin}
                    onLogout={onLogout}
                />
            )}
        </>
    );
};

export default Navbar;
