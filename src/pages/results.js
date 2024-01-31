import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import ResultsTable from "@/components/ResultsTable";
import axios from "axios";
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Button, Center, Heading, Link, Text, useColorMode } from "@chakra-ui/react";



const apiUrl = "http://127.0.0.1:8000/general/";

const Results = () => {
    const router = useRouter();
    const query = router.query;
    const { colorMode } = useColorMode();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const title = `Results ${query.query} | Insolvent.ai`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fqd = apiUrl + query.query;
                const response = await axios.get(fqd)
                if (response.data && response.data.data) {

                    const dataArray = [];
                    for (const key in response.data.data) {
                        if (response.data.data.hasOwnProperty(key)) {
                            dataArray.push(response.data.data[key])
                        }
                    }
                    setData(dataArray);
                    setIsLoading(false);
                } else {
                    console.error("Invalid Data!")
                }
            } catch (error) {
                console.error(`Invalid Data: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Layout title={title}>
                <Box>
                    {/* Results */}
                    <Center my='3rem'>
                        <Heading>Here are the latest relevant businesses for &quot;{query.query}&quot;</Heading>
                    </Center>

                    <Center>
                        <ResultsTable isLoading={isLoading} data={data} />
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