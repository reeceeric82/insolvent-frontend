import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Text, TableContainer, useColorMode, Skeleton, Box } from "@chakra-ui/react";

const apiUrl = "http://127.0.0.1:8000/temp";

const DataTable = () => {
    const { colorMode } = useColorMode();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        <Box width='80%'>
            <Text py='2rem' fontWeight='bold' fontSize='2xl'>Top Ranked Recently Insolvent Businesses</Text>
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
                            data.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.company_title}</Td>
                                    <Td>{item.nature_of_business}</Td>
                                    <Td>{item.website_url}</Td>
                                    <Td>{item.domain_auth}</Td>
                                    <Td>{item.incorp_date}</Td>
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
