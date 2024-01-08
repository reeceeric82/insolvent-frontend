const { Box, Center, Text } = require("@chakra-ui/react")

const NewsBlob = ({ title, date, content }) => {
    return (
        <>
            <Box border='1px' borderColor='grey.300' borderRadius='10px' height='24rem'>
                <Box p='5px' px={5}>
                    <Center>
                        <Text fontSize='3xl' align='center'>{title}</Text>
                    </Center>
                    <Text as='u'>{date}</Text>
                    <Text noOfLines={[2, 4, 8]}>{content}</Text>
                </Box>
            </Box>
        </>
    )
}

export default NewsBlob;