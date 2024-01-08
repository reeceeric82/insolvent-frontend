import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import ResultsTable from "@/components/ResultsTable";
import NextLink from 'next/link';
import { Box, Button, Center, Heading, Link, Text, useColorMode } from "@chakra-ui/react";

const Results = () => {
    const { colorMode } = useColorMode();
    const title = "Results | Insolvent.ai"

    return (
        <>
            <Layout title={title}>
                <Box>
                    {/* Results */}
                    <Center my='3rem'>
                        <Heading>Here are the latest relevant businesses for ~Search Query~</Heading>
                    </Center>
                    <Text ml='160px' pt='4rem' fontWeight='bold' fontSize='2xl'>Search Results</Text>
                    <Center>
                        <ResultsTable />
                    </Center>
                    {/* CTA Updates */}
                    <Box my='6rem' height='12rem' bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
                        <Center py='2rem'>
                            <Text fontSize='3xl'>Stay updated on your industry</Text>
                        </Center>
                        <Center>
                            <Link as={NextLink} href='/signup'>
                                <Button
                                    bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                    color='white'
                                    variant='ghost'
                                    _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                                >Sign-up</Button>
                            </Link>
                        </Center>
                    </Box>
                </Box>
                <Footer />
            </Layout>
        </>
    )
}

export default Results