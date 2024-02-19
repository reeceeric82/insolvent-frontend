import { useState, useEffect, useRef } from 'react';
import { Input, Box, List, ListItem, Link, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import base from '../data/baseOptions';
import axios from 'axios';

const apiUrl = "https://insolvent-api-f53jrkikia-ew.a.run.app/company-numbers";

const AutoComplete = () => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isMobile] = useMediaQuery("(max-width: 800px)");

    const autoCompleteRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                if (response.data && response.data.data) {
                    const additional = response.data.data;
                    const options = { ...base, ...additional };
                    setOptions(options);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();

        const handleClickOutside = (event) => {
            if (autoCompleteRef.current && !autoCompleteRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [options, setOptions] = useState(base);

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        setShowOptions(true);

        const filteredKeys = Object.keys(options).filter(key =>
            options[key].toLowerCase().includes(value.toLowerCase())
        );

        setFilteredOptions(filteredKeys);
    };

    const handleOptionSelect = (option) => {
        router.push(`/results/search?query=${option}`);
    };

    

    return (
        <Box position="relative" width={isMobile ? "90%" : "70%"}>
            <Text pb='1rem' fontWeight='bold'>What are you looking for?</Text>
            <Input
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={loading ? 'Loading...' : 'Search...'}
                width="100%"
                border="none"
                borderRadius="10"
                bg={colorMode === 'light' ? 'white' : 'blue.900'}
                _focus={{ outline: "none", border: "2px solid blue.900" }}
            />
            {showOptions && (
                <Box
                    ref={autoCompleteRef}
                    position="absolute"
                    width="100%"
                    bg={colorMode === 'light' ? 'white' : 'blue.900'}
                    color={colorMode === 'light' ? 'black' : 'white'}
                    boxShadow="md"
                    borderRadius="md"
                    marginTop="2px"
                    overflow="auto"
                    maxHeight="200px"
                    zIndex="1"
                >
                    <List>
                        {filteredOptions.map((option, index) => (
                            <ListItem key={index} py="2" px="3" _hover={{ background: "rgba(0, 0, 0, 0.2)", cursor: "pointer" }}>
                                <Link onClick={() => handleOptionSelect(option)}>
                                    <Text fontSize="md">{options[option]}</Text>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    );
};

export default AutoComplete;
