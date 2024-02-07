import { useState } from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import ExpandForm from "@/components/Form";
import { Box, Button, Center, Heading, Link, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import NextLink from 'next/link';


const Signup = () => {
    const { colorMode } = useColorMode();
    const [isExpanded, setExpanded] = useState(false);
    const [isMobile] = useMediaQuery('(max-width: 800px)');
    const title = "Sign up | Insolvent"

    const handleExpandClick = () => {
        setExpanded(!isExpanded)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add functionality here
        console.log("Form submitted")
    }

    return (
        <>
            <Layout title={title}>
                <Box>
                    <Box height='20vh' mt='6rem'>
                        <Center>
                            <Heading>Welcome to Insolvent.ai</Heading>
                        </Center>
                        <Center>
                            <Text p='5px'>Already a member?</Text>
                            <Link href='/login' as={NextLink} fontWeight='bold'>Log in</Link>
                        </Center>
                    </Box>
                    <Box>
                        <Center>
                            <Button
                                width={isMobile ? '80%' : '30%'}
                                color='white'
                                bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                                onClick={handleExpandClick}
                            >Signup with Email</Button>
                        </Center>
                        <Center>
                            <ExpandForm onSubmit={handleSubmit} isExpanded={isExpanded} />
                        </Center>
                    </Box>
                    <Center mt='2rem'>
                        <Text px='5px'>By signing up for Insolvent.ai you agree to the</Text>
                        <Link as={NextLink} href='#' fontWeight='bold'> Terms of Service</Link>
                    </Center>
                </Box>
                <Box height='55vh'></Box>
                <Footer />
            </Layout >
        </>
    )
}

export default Signup;