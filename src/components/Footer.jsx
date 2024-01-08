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
            bottom="0"
            left="0"
            right="0"
            mt="auto"
        >
            <Flex maxW="container.xl" mx="auto">
                <Box flex="1" textAlign={"center"}>
                    <VStack>
                        <Text as={"b"} fontSize={"sm"}>
                            Designed and Developed by&nbsp;
                            <Link
                                href="https://www.linkedin.com/in/reece-russell-a4146a20b/"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                Reece Russell
                            </Link>
                        </Text>
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