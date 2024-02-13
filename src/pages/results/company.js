import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Center, Heading, Link, List, ListItem, Text, useMediaQuery } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import NextLink from 'next/link';
import Footer from '@/components/Footer';

const apiUrl = 'http://127.0.0.1:8000/company/';

const CompanyResult = () => {
    const router = useRouter();
    const query = router.query;
    const [isMobile] = useMediaQuery('(max-width: 800px)');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const title = `${query.query} | Insolvent.ai`;



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


    if (isLoading) {
        return (<Layout title={title}>Loading</Layout>)
    }
    else {
        const noticesArray = [];
        for (const noticeKey in data[0].notices) {
            if (data[0].notices.hasOwnProperty(noticeKey)) {
                noticesArray.push(data[0].notices[noticeKey]);
            };
        };

        const liquidators = noticesArray[0].liquidators;

        return (
            <Layout title={title}>
                <Center>
                    <Heading align={'center'}>Result for: <br />{data[0].company_title} - {data[0].company_number}</Heading>
                </Center>
                <Box width={'90%'} px={'5%'} mt={'3rem'}>
                    <Text as='b' fontSize={'xl'}>Company Details:</Text>
                    <hr />
                    <Text><span style={{fontWeight: 'bold'}}>Company Name:</span> {data[0].company_title}</Text>
                    <Text><span style={{fontWeight: 'bold'}}>Company Number:</span> {data[0].company_number}</Text>
                    <Text><span style={{fontWeight: 'bold'}}>Trading as:</span> {data[0].trading_name}</Text>
                    <Text><span style={{fontWeight: 'bold'}}>Incorporation Date:</span> {data[0].incorporation_date}</Text>
                    <Text><span style={{fontWeight: 'bold'}}>Nature of Business:</span> {data[0].nature_of_business}</Text>
                    <Text><span style={{fontWeight: 'bold'}}>SIC: </span>
                        [ 
                        {data[0].sic_codes.map((code, index) => (
                            <span key={index}>{code}{index <= data[0].sic_codes.length - 1 ? ',' : ''}</span>
                        ))}
                        ]
                    </Text>
                    <br />
                    <Text as='b' fontSize={'xl'}>Notices:</Text>
                    <hr />
                    {/* Notices */}
                    {noticesArray.map((item) => (
                    <Box key={item.notice_code}>
                        <List key={item.notice_code}>
                            <ListItem><span style={{fontWeight: 'bold'}}>{item.notice_code}</span> - {item.notice_status}</ListItem>
                            <ListItem><span style={{fontWeight: 'bold'}}>Published Date:</span> {item.published_date}</ListItem>
                            <ListItem><span style={{fontWeight: 'bold'}}>URL:</span>
                                <Link pl='7px' as={NextLink} href={item.notice_url.replace('/id/', '/')} target='_blank' rel='noreferer'>{item.notice_url}</Link>
                            </ListItem>
                        </List>
                        <br />
                    </Box>
                    ))}
                    {/* Liquidators */}
                    <Text as='b' fontSize={'xl'}>Liquidators:</Text>
                    <hr />
                    <Text><span style={{fontWeight: 'bold'}}>Insolvency Agency:</span> <span>{data[0].insolvency_agencys}</span></Text>
                    <Text><span style={{fontWeight: 'bold'}}>Address:</span> <span>{data[0].agency_address}</span></Text>
                    <Text as='b'>Liquidators:</Text>
                    <Text>{liquidators.liquidator_1.name} {liquidators.liquidator_1.ip_no}</Text>
                    <Text>{liquidators.liquidator_2.name} {liquidators.liquidator_2.ip_no}</Text>
                </Box>
                <Box height={'30vh'}></Box>
                <Footer />
            </Layout>
        )
    }
}

export default CompanyResult;