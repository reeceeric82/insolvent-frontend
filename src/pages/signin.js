import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { signIn, useSession, signOut } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";
import { Box, Button, Center, Heading, Link, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";


const Signin = ({ }) => {
    const { colorMode } = useColorMode();
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    const title = "Sigin | Insolvent"
    const router = useRouter();

    const { data: session } = useSession()

    const handleSignInWithGoogle = () => {
        signIn('google', { callbackUrl: '/' });
    };

    // Redirect to home page if the user is already logged in
    if (session?.user) {
        router.push('/');
    }

    return (
        <>
            <Layout title={title}>
                <Box>
                    <Center height='20vh'>
                        {session?.user ?
                            <Heading>Welcome Back</Heading>
                            :
                            <Heading>Sign-in</Heading>
                        }
                    </Center>
                    <Center>
                        <Box width={isMobile ? '80%' : '30%'}>
                            {session?.user ?
                                <Button
                                    width='100%'
                                    onClick={() => signOut()}
                                    mt={4}
                                    color='white'
                                    bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                >
                                    <span style={{ marginRight: '6px' }}>
                                        <FcGoogle />
                                    </span>
                                    Sign out
                                </Button>
                                :
                                <Button
                                    width='100%'
                                    onClick={handleSignInWithGoogle}
                                    mt={4}
                                    color='white'
                                    bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                >
                                    <span style={{ marginRight: '6px' }}>
                                        <FcGoogle />
                                    </span>
                                    Sign in with Google
                                </Button>
                            }
                        </Box>
                    </Center>
                </Box>
                <Box height='70vh'></Box>
                <Footer />
            </Layout>
        </>
    )
}

export default Signin;