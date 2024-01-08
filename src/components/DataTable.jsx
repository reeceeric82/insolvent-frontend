import { Table, Thead, Tbody, Tr, Th, Td, Text, TableContainer, useColorMode } from "@chakra-ui/react";

const DataTable = () => {
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
                        <Th>Incorporation Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Td>1993</Td>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Td>1993</Td>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Td>1993</Td>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Td>1993</Td>
                    </Tr>
                    <Tr>
                        <Td>Example</Td>
                        <Td>Example Data</Td>
                        <Td>Example.com</Td>
                        <Td>93</Td>
                        <Td>1993</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default DataTable;