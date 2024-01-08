import Head from 'next/head'
import { Container } from '@chakra-ui/react'
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

            <Navbar />
            <Container maxW={'100vw'} minH={'100vh'} padding={0} margin={0}>
                {children}
            </Container>
            <BackToTopButton />

        </>
    )
}

export default Layout;