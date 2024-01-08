import { Table, Thead, Tbody, Tr, Th, Td, Text, TableContainer } from "@chakra-ui/react";

const DataTable = () => {
    return (
        <TableContainer width='80%' borderRadius='10px'>
            <Text pl='20px' py='5px' fontWeight='bold'>Top Ranked Recently Insolvent Businesses</Text>
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