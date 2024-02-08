import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text, Skeleton, useColorMode, useMediaQuery, Link } from "@chakra-ui/react";
import { useState } from 'react';
import {NextLink} from 'next/link';
import LoadingAnimation from "./LoadingAnimation";
import { useRouter } from "next/router";


const ResultsTable = ({ isLoading, data }) => {
    const { colorMode } = useColorMode();
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile] = useMediaQuery("(max-width: 800px)");
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const router = useRouter();

    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleClick = (query) => {
        router.push(`results/company?query=${query}`);
    }


    if (isLoading) {
        return (
            <Box width={isMobile ? '95%' : '80%'}>
                <LoadingAnimation />
                <TableContainer width='100%' borderRadius='10px' border='4px' borderColor={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Company Name</Th>
                                <Th>Nature of Business</Th>
                                <Th>Website URL</Th>
                                <Th>Domain Auth</Th>
                                <Th>Get Contact Info</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {[...Array(itemsPerPage)].map((_, index) => (
                                <Tr key={index}>
                                    <Td><Skeleton height="20px" width="100px" /></Td>
                                    <Td><Skeleton height="20px" width="100px" /></Td>
                                    <Td><Skeleton height="20px" width="100px" /></Td>
                                    <Td><Skeleton height="20px" width="100px" /></Td>
                                    <Td><Skeleton height="20px" width="100px" /></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }

    return (
        <Box width={isMobile ? '95%' : '80%'}>
            <Text pt='4rem' fontWeight='bold' fontSize='2xl'>Search Results</Text>
            <TableContainer width='100%' borderRadius='10px' border='4px' borderColor={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Company Name</Th>
                            <Th>Nature of Business</Th>
                            <Th>Website URL</Th>
                            <Th>Domain Auth</Th>
                            <Th>Get Contact Info</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentItems.map((item) => (
                            <Tr key={item.company_id}>
                                <Td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    <Link as={NextLink} onClick={() => handleClick(item.company_number)}>{item.company_title}</Link>
                                </Td>
                                <Td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {item.nature_of_business}
                                </Td>
                                <Td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {item.website_url}
                                </Td>
                                <Td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {item.domain_auth}
                                </Td>
                                <Th>
                                    <Button
                                        bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                        color='white'
                                        _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                                    >Contact</Button>
                                </Th>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button onClick={prevPage} disabled={currentPage === 1} mx={5}>Previous</Button>
                <Text mt={2}>{currentPage} of {Math.ceil(data.length / itemsPerPage)}</Text>
                <Button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} mx={5}>Next</Button>
            </Box>
        </Box>
    );
}

export default ResultsTable;
