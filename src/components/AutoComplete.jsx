// components/SearchBox.js
import { Input, InputGroup, InputLeftElement, IconButton, Box, List, ListItem, Text, useColorMode } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

const SearchBox = ({ onSearch }) => {
    const { colorMode } = useColorMode();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Rebuild, place holder currently
                const response = await fetch("http://127.0.0.1:8000/companies");
                const data = await response.json();
                setApiData(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        // Filter suggestions based on notices, SIC codes, and company names
        if (apiData) {
            const matchingSuggestions = Object.values(apiData).reduce((acc, company) => {
                const notices = Object.values(company.notices || {});
                const sicCodes = company.sic_codes || [];
                const companyName = company.company_title || "";

                if (
                    notices.some((notice) => notice.published_date.includes(newSearchTerm)) ||
                    sicCodes.some((sicCode) => sicCode.includes(newSearchTerm)) ||
                    companyName.toLowerCase().includes(newSearchTerm.toLowerCase())
                ) {
                    acc.push(companyName);
                }

                return acc;
            }, []);

            setSuggestions(matchingSuggestions);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
        onSearch(suggestion);
    };

    return (
        <InputGroup width={'70%'}>
            <InputLeftElement pointerEvents='none'>
                <IconButton
                    aria-label='Search'
                    icon={<SearchIcon />}
                    bg={colorMode === 'light' ? 'white' : 'blue.900'}
                    _hover={{ bg: 'transparent' }}
                    _active={{ bg: 'transparent' }}
                />
            </InputLeftElement>
            <Input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                bg={colorMode === 'light' ? 'white' : 'blue.900'}
                onChange={handleSearchChange}
            />
            {suggestions.length > 0 && (
                <Box position='absolute' width='100%'>
                    <List mt='2' bg='white' borderRadius='md' boxShadow='md'>
                        {suggestions.map((suggestion, index) => (
                            <ListItem key={index} onClick={() => handleSuggestionClick(suggestion)} cursor='pointer'>
                                <Text p='2'>{suggestion}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </InputGroup>
    );
};

export default SearchBox;
