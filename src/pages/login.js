import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import PasswordInput from "@/components/Password";
import NextLink from 'next/link';
import { Box, Button, Center, FormControl, Heading, Input, Link, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";

const Login = () => {
    const { colorMode } = useColorMode();
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    const title = "Login | Insolvent"

    return (
        <>
            <Layout title={title}>
                <Box>
                    <Center height='20vh'>
                        <Heading>Welcome Back</Heading>
                    </Center>
                    <Center>
                        <Box width={isMobile ? '80%' : '30%'}>
                            <form>
                                <FormControl isRequired>
                                    <Input my='1rem' type='email' placeholder="Enter your email" />
                                    <PasswordInput />
                                </FormControl>
                                <Button
                                    width='100%'
                                    type="submit"
                                    mt={4}
                                    color='white'
                                    bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                >Log in</Button>
                            </form>
                        </Box>
                    </Center>
                </Box>
                <Center mt='2rem'>
                    <Text px='5px'>Not a member yet?</Text>
                    <Link as={NextLink} href="/signup" fontWeight='bold'>Sign-up</Link>
                </Center>
                <Box height='55vh'></Box>
                <Footer />
            </Layout>
        </>
    )
}

export default Login;