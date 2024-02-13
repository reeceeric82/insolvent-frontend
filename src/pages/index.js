import Layout from '@/components/Layout'
import AutoComplete from '@/components/AutoComplete';
import NewsBlob from '@/components/NewsBlob';
import DataTable from '@/components/DataTable';
import Footer from '@/components/Footer';
import { Box, Center, Grid, GridItem, Heading, Text, VStack, useColorMode } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const newsApi = 'https://newsapi.org/v2/everything?q=insolvency&pageSize=3&apiKey=611b3750d35749f38e2cc97aeac1dc83';


const removeHtmlTags = (html) => {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || ' ';
}


const Home = () => {
  const title = "Home | Insolvent.ai";
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(newsApi);

        if (response.data && response.data.articles) {
          const dataArray = [];

          for (const key in response.data.articles) {
            if (response.data.articles.hasOwnProperty(key)) {
              dataArray.push(response.data.articles[key]);
            }
          }
          setData(dataArray);
          setIsLoading(false);
        } else {
          console.error('Invalid Data')
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    fetchData();
  }, []);


  return (
    <Layout title={title}>
      {isMobile ? <MobileHome data={data} isLoading={isLoading}/> : <DesktopHome data={data} isLoading={isLoading}/>}
    </Layout>
  )
}


const DesktopHome = ({data, isLoading}) => {
  const { colorMode } = useColorMode();
  return (
    <>

      {/* Hero Section */}
      <Box
        left={0}
        padding={0}
        width='100vw'
        height='sm'
        bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
        <Center>
          <Text
            aria-label='Aquire Insolvent Business'
            fontWeight='bold'
            fontSize='3xl'
            width='28rem'
            p='1rem'
            m='5rem'
            align='center'
          >
            Aquire Insolvent Businesses
          </Text>
        </Center>

        <Center>
          <AutoComplete />
        </Center>
      </Box>
      {/* News Blob */}
      <Box>
        <Center pt='6rem'>
          <Heading width='55%' align='center'>Many of the most savvy entrepreneurs in the UK
            grow their businesses by acquiring insolvent companies.</Heading>
        </Center>
        <Grid templateColumns='repeat(3, 1fr)' gap={10} px={10} pt={10}>
              {data.map((item, idx) => (
                <GridItem key={idx} margin='1rem'>
                  <NewsBlob
                    isLoading={isLoading}
                    title={item.title}
                    date={item.publishedAt.substring(0,10)}
                    description={removeHtmlTags(item.description)}
                    content={removeHtmlTags(item.content.replace(/\[\+\d+\s*chars\]/g, ''))}
                    url={item.url}
                  />
                </GridItem>
              ))}
        </Grid>
      </Box>

      <Center mt='7rem'>
        <Box height='1rem' width='100%' bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}></Box>
      </Center>

      {/* Top Company Data */}
      <Box mb='6rem'>
        <Center mt='6rem'>
          <Heading width='55%' align='center'>With nearly 400 businesses in the UK entering insolvency every day,
            now you can too with Insolvency.ai.</Heading>
        </Center>

        <Center>
          <DataTable />
        </Center>
      </Box>
      {/* Final CTA */}
      <Box
        bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}
        height='10rem'
        width='100vw'
        pt='3rem'>
        <Center>
          <AutoComplete />
        </Center>
      </Box>
      <Footer />
    </>
  )
}


const MobileHome = ({data, isLoading}) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {/* Hero Section */}
      <Box
        left={0}
        padding={0}
        width='100vw'
        height='sm'
        bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}>
        <Center>
          <Text
            aria-label='Aquire Insolvent Business'
            fontWeight='bold'
            fontSize='3xl'
            width='28rem'
            p='1rem'
            m='1rem'
            align='center'
          >
            Aquire Insolvent Businesses
          </Text>
        </Center>

        <Center mt="3rem">
          <AutoComplete />
        </Center>
      </Box>
      {/* News Blob */}
      <Box>
        <Center pt='6rem'>
          <Heading width='95%' align='center'>Many of the most savvy entrepreneurs in the UK
            grow their businesses by acquiring insolvent companies.</Heading>
        </Center>
        <VStack mt='3rem'>
          {data.map((item, idx) => (
            <GridItem key={idx} margin='1rem'>
              <NewsBlob 
                isLoading={isLoading}
                title={item.title}
                date={item.publishedAt.substring(0, 10)}
                description={removeHtmlTags(item.description)}
                content={removeHtmlTags(item.content.replace(/\[\+\d+\s*chars\]/g, ''))}
                url={item.url} 
                />
            </GridItem>
          ))}
          {/* </Grid> */}
        </VStack>
      </Box>

      <Center mt='7rem'>
        <Box height='1rem' width='100%' bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}></Box>
      </Center>

      {/* Top Company Data */}
      <Box mb='6rem'>
        <Center mt='6rem'>
          <Heading width='95%' align='center'>With nearly 400 businesses in the UK entering insolvency every day,
            now you can too with Insolvency.ai.</Heading>
        </Center>

        <Center>
          <DataTable />
        </Center>
      </Box>
      {/* Final CTA */}
      <Box
        bg={colorMode === 'light' ? 'yellow.400' : 'blue.400'}
        height='10rem'
        width='100vw'
        pt='3rem'>
        <Center>
          <AutoComplete />
        </Center>
      </Box>
      <Footer />
    </>
  )
}


export default Home;