import Layout from '@/components/Layout'
import AutoComplete from '@/components/AutoComplete';
import NewsBlob from '@/components/NewsBlob';
import DataTable from '@/components/DataTable';
import Footer from '@/components/Footer';
import { Box, Center, Grid, GridItem, Heading, Text, VStack, useColorMode } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import newsItems from "../data/newsItems";


const Home = () => {
  console.log(newsItems)
  const title = "Home | Insolvent.ai";
  const [isMobile] = useMediaQuery("(max-width: 800px)");


  return (
    <Layout title={title}>
      {isMobile ? <MobileHome data={newsItems}/> : <DesktopHome data={newsItems}/>}
    </Layout>
  )
}


const DesktopHome = ({data}) => {
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
                    title={item.title}
                    date={item.date}
                    content={item.content}
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


const MobileHome = ({data}) => {
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
                title={item.title}
                date={item.date}
                content={item.content}
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