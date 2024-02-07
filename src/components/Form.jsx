import PasswordInput from './Password';
import { Box, Button, FormControl, Input, useColorMode, useMediaQuery } from "@chakra-ui/react"



const ExpandForm = ({ onSubmit, isExpanded }) => {
    const { colorMode } = useColorMode();
    const [isMobile] = useMediaQuery('(max-width: 800px)');

    return (
        <Box width={isMobile ? '80%' : '30%'} mt='2rem'>
            <form onSubmit={onSubmit}>
                <Box display={isExpanded ? "block" : "none"}>
                    <FormControl isRequired>
                        <Input type="text" placeholder="Enter your name" />
                        <Input my='10px' type="email" placeholder="Enter your email" />
                        <PasswordInput />
                        <PasswordInput />
                    </FormControl>
                    <Button type="submit" mt={4} bg={colorMode === 'light' ? 'blue.400' : 'purple.400'}>
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default ExpandForm;