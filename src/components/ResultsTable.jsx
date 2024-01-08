import { Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useColorMode } from "@chakra-ui/react";

const ResultsTable = () => {
    const { colorMode } = useColorMode();
    return (
        <TableContainer width='80%' borderRadius='10px' border='4px' borderColor={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
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
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Th>
                            <Button
                                bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                color='white'
                                _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                            >Contact</Button>
                        </Th>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Th>
                            <Button
                                bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                color='white'
                                _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                            >Contact</Button>
                        </Th>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Th>
                            <Button
                                bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                color='white'
                                _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                            >Contact</Button>
                        </Th>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Th>
                            <Button
                                bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                color='white'
                                _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                            >Contact</Button>
                        </Th>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Th>
                            <Button
                                bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}
                                color='white'
                                _hover={colorMode === 'light' ? 'blue.200' : 'purple.200'}
                            >Contact</Button>
                        </Th>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ResultsTable;