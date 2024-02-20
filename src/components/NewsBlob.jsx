import { Box, Center, Text } from "@chakra-ui/react";

const NewsBlob = ({ title, date, content, margin = '0' }) => {
    return (
        <>
            <Box border='1px' borderColor='grey.300' borderRadius='10px' height='24rem' my={margin}>
                <Box p='5px' px={5}>
                    <Center>
                        <Text fontSize='3xl' align='center'>{title}</Text>
                    </Center>
                    <Text as='u'>{date}</Text>
                    <Text noOfLines={[6, 8]}>{content}</Text>
                </Box>
            </Box>
        </>
    )
}

export default NewsBlob;