import Head from 'next/head'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from './theme'
import BackToTopButton from './BackToTop'
import Navbar from './Navbar'

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='descriptipn' content='Insolvent.ai Website' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel='icon' href='favicon.ico' />
            </Head>
            <ChakraProvider theme={theme}>
                <Navbar />
                <Container maxW={'100vw'} minH={'100vh'}>
                    {children}
                </Container>
                <BackToTopButton />
            </ChakraProvider>
        </>
    )
}

export default Layout;