import { Box, Button, Flex, Image, Link, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import NextLink from 'next/link';

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
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
                            aria-label='logout'
                            onClick={onLogout}
                            variant='ghost'
                        >Logout</Button>
                    ) : (
                        <Button
                            aria-label='login'
                            onClick={onLogin}
                            variant='ghost'
                        >Login</Button>
                    )
                    }
                </Flex>
            </Box>
        </Flex >
    )
}

export default Navbar;