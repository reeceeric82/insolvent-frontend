import { Box, Button, Flex, useColorMode, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon, UnlockIcon, LockIcon } from '@chakra-ui/icons'

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
            <Box>
                <Button
                    variant='ghost'
                    fontWeight={'bold'}>
                    Insolvent.ai
                </Button>
            </Box>

            <Box>
                <Flex align={'center'}>
                    <Button
                        onClick={toggleColorMode}
                        variant='ghost'
                        mr='4'
                    >{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>

                    {isLoggedIn ? (
                        <Button
                            leftIcon={<LockIcon />}
                            onClick={onLogout}
                            variant='ghost'
                        >Logout</Button>
                    ) : (
                        <Button
                            leftIcon={<UnlockIcon />}
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