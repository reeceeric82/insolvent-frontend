import { Box, Flex, Link, Text, VStack, useColorMode } from '@chakra-ui/react';

const Footer = () => {
    const { colorMode } = useColorMode();
    const date = new Date();
    let year = date.getFullYear();


    return (
        <Box
            as="footer"
            bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}
            py="4"
            left="0"
            right="0"
            mt="auto"
        >
            <Flex maxW="container.xl" mx="auto">
                <Box flex="1" textAlign={"center"}>
                    <VStack>
                        <Text as={"b"} fontSize={"sm"}>
                            Copyright &copy; Insolvent.ai {year}
                        </Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;