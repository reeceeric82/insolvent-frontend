import { Box, Center, Skeleton, Text, Link } from "@chakra-ui/react";
import {NextLink} from 'next/link';

const NewsBlob = ({ isLoading, title, date, description, content, url, margin = '0' }) => {
    return (
        <>
        {isLoading ?
                <Box border='1px' borderColor='grey.300' borderRadius='10px' height='24rem' my={margin}>
                    <Box p='5px' px={5}>
                        <Skeleton height="2rem" mb="1rem" />
                        <Skeleton height="1rem" mb="0.5rem" />
                        <Skeleton height="1rem" mb="0.5rem" />
                        <Skeleton height="1rem" mb="0.5rem" />
                        <Skeleton height="1rem" mb="0.5rem" />
                        <Skeleton height="1rem" mb="0.5rem" />
                        <Skeleton height="1rem" mb="0.5rem" />
                    </Box>
                </Box>
            :
            <Box border='1px' borderColor='grey.300' borderRadius='10px' height='24rem' my={margin}>
                <Box p='5px' px={5}>
                    <Center>
                        <Text fontSize='3xl' align='center' noOfLines={[2]} mb='10px'>{title}</Text>
                    </Center>
                    <Text as='u'>{date}</Text>
                    <br />
                    <Text as='i'>{description}</Text>
                    <Text noOfLines={[4, 5]}>{content}</Text>
                    <Text as='b'>
                        <Link as={NextLink} href={url} target="_blank" rel="noreferer">Read More..</Link>
                    </Text>
                </Box>
            </Box>
        }
        </>
    )
}

export default NewsBlob;