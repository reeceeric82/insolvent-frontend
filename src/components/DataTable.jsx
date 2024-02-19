import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Center, Table, TableContainer, Thead, Tbody, Tr, Th, Td, Text, Skeleton, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Link from 'next/link';

const apiUrl = "https://insolvent-api-f53jrkikia-ew.a.run.app/temp";

const DataTable = () => {
    const { colorMode } = useColorMode();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile] = useMediaQuery('(max-width: 800px)');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
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
                    console.error('Invalid Data')
                }
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <Box width={isMobile ? '90%' : '85%'}>
            {isMobile ? 
            <Center>
                <Text pt='4rem' pb='1rem' fontWeight='bold' fontSize='1xl' align='center'>Top Ranked Recently Insolvent Businesses</Text>
            </Center>
            :
            <Text py='2rem' fontWeight='bold' fontSize='2xl'>Top Ranked Recently Insolvent Businesses</Text>
            }
            <TableContainer borderRadius='10px' border='4px' borderColor={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Company Name</Th>
                            <Th>Nature of Business</Th>
                            <Th>Website URL</Th>
                            <Th>Domain Auth</Th>
                            <Th>Incorporation Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {isLoading ? (
                            // Skeleton loading while data is loading
                            <Tr>
                                <Td>
                                    <Skeleton height="20px" />
                                </Td>
                                <Td>
                                    <Skeleton height="20px" />
                                </Td>
                                <Td>
                                    <Skeleton height="20px" />
                                </Td>
                                <Td>
                                    <Skeleton height="20px" />
                                </Td>
                                <Td>
                                    <Skeleton height="20px" />
                                </Td>
                            </Tr>
                        ) : (
                                data.sort((a, b) => {
                                    if (a.domain_auth === null) {
                                        return 1;
                                    }
                                    if (b.domain_auth === null) {
                                        return -1;
                                    }
                                    return b.domain_auth - a.domain_auth;
                                }).map((item, index) => (
                                    <Tr key={index}>
                                        <Td>{item.company_title}</Td>
                                        <Td>{item.nature_of_business}</Td>
                                        <Td><Link
                                            target='blank'
                                            href={item.website_url}
                                        >{item.website_url}</Link></Td>
                                        <Td>{item.domain_auth}</Td>
                                        <Td>{item.incorporation_date}</Td>
                                    </Tr>
                                ))
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default DataTable;
