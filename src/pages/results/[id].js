import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, useMediaQuery } from '@chakra-ui/react';
import Layout from '@/components/Layout';

const apiUrl = 'http://127.0.0.1:8000/company/';

const SearchResults = () => {
    const router = useRouter();
    const query = router.query;
    const [isMobile] = useMediaQuery('(max-width: 800px)');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const title = `${query.query.companyNumber} | Insolvent.ai`;



    useEffect(() => {
        const fetchData = async () => {
            try {
                const fdqn = apiUrl + query.query;
                const response = await axios.get(fdqn);
                if (response.data && response.data.data) {
                    const dataArray = [];
                    for (const key in response.data.data) {
                        if (response.data.data.hasOwnProperty(key)) {
                            dataArray.push(response.data.data[key])
                        };
                    };
                    setData(dataArray);
                    setIsLoading(false);
                } else {
                    console.error('Invalid Data');
                }
            } catch (error) {
                console.error(`Invalid Data: ${error}`);
            };
        };

        fetchData();
    })

    return (
        <Layout title={title}>
            {/* Create Page 
            Show company data, need to get the query from the last page so
            we can pass it back to 'Go back to results'*/}
            <Text>Hello</Text>
        </Layout>
    )
}

export default SearchResults;