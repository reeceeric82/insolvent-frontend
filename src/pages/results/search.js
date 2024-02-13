import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import ResultsTable from "@/components/ResultsTable";
import axios from "axios";
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Box, Button, Center, Heading, Link, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";


const apiUrl = "http://127.0.0.1:8000/general/";


const Results = () => {
    var router = useRouter();
    var query = router.query;
    const [isMobile] = useMediaQuery("(max-width: 800px)");
    const title = `Results ${query.query} | Insolvent.ai`;
    const { data: session, status } = useSession();

    return (
        <>
            <Layout title={title}>
                {isMobile ? <MobileResults session={session}/> : <DesktopResults session={session}/>}
                <Footer />
            </Layout>
        </>
    )
}


const DesktopResults = ({session}) => {
    var router = useRouter();
    var query = router.query;
    const { colorMode } = useColorMode();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fqdn = apiUrl + query.query;
                const response = await axios.get(fqdn)
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
    });

    return (
        <>
            <Box>
                {/* Results */}
                <Center my='3rem'>
                    <Heading>Here are the latest relevant businesses for &quot;{query.query}&quot;</Heading>
                </Center>

                <Center>
                    <ResultsTable isLoading={isLoading} data={data} isLoggedIn={session?.user} />
                </Center>
                {/* CTA Updates */}
                <Box my='6rem' height='12rem' bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
                    <Center py='2rem'>
                        <Text fontSize='3xl'>Stay updated on your industry</Text>
                    </Center>
                    <Center>
                        <Link as={NextLink} href='/signin'>
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
        </>
    )
};

const MobileResults = ({isLoggedIn}) => {
    var router = useRouter();
    var query = router.query;
    const { colorMode } = useColorMode();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const fqdn = apiUrl + query.query;
                const response = await axios.get(fqdn)
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
    });

    return (
        <>
            {/* Results */}
            <Box mt="2rem" mx="2rem">
                <Heading>Here are the latest relevant businesses for &quot;{query.query}&quot;</Heading>
            </Box>
            <Center>
                <ResultsTable isLoading={isLoading} data={data} />
            </Center>
            {/* CTA Updates */}
            <Box my='6rem' height='12rem' bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
                <Center py='2rem'>
                    <Text fontSize='3xl'>Stay updated on your industry</Text>
                </Center>
                <Center>
                    <Link as={NextLink} href='/signin'>
                        <Button
                            bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                            color='white'
                            variant='ghost'
                            _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                        >Sign-up</Button>
                    </Link>
                </Center>
            </Box>
        </>
    )
};

export default Results