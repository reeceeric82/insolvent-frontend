import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import PasswordInput from "@/components/Password";
import { Box, Button, Center, FormControl, Heading, Input, useColorMode } from "@chakra-ui/react";

const Login = () => {
    const { colorMode } = useColorMode();

    const title = "Login | Insolvent"

    return (
        <>
            <Layout title={title}>
                <Box>
                    <Center height='20vh'>
                        <Heading>Welcome Back</Heading>
                    </Center>
                    <Center>
                        <Box width='30%'>
                            <form>
                                <FormControl isRequired>
                                    <Input my='1rem' type='email' placeholder="Enter your email" />
                                    <PasswordInput />
                                </FormControl>
                                <Button
                                    width='100%'
                                    type="submit"
                                    mt={4}
                                    bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                >Log in</Button>
                            </form>
                        </Box>
                    </Center>
                </Box>
                <Box height='55vh'></Box>
                <Footer />
            </Layout>
        </>
    )
}

export default Login;