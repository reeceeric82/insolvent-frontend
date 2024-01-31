import Layout from '@/components/Layout'
import AutoComplete from '@/components/AutoComplete';
import NewsBlob from '@/components/NewsBlob';
import DataTable from '@/components/DataTable';
import Footer from '@/components/Footer';
import { Box, Center, Grid, GridItem, Heading, Text, useColorMode } from '@chakra-ui/react'


const dummyData = [
  {
    title: 'Next buys furniture retailer Made.com for £3.4 million',
    date: 'Nov 9, 2022',
    content: 'LONDON, (Reuters) - British fashion retailer Next (NXT.L) will buy the Made.com (MADE.L) brand for 3.4 million pounds ($3.8 million) after the online furniture seller collapsed into administration, resulting in about 400 job losses.Made.com hit the buffers on Wednesday, running out of cash as a weaker economy deterred Britons from buying new furniture. Retail giant Next bought its brand, website and intellectual property from administrators PwC.'
  },
  {
    title: 'Boohoo acquires Debenhams for £55 million',
    date: 'Jan 25, 2021',
    content: `LONDON, (Reuters) - Boohoo Group has bought Debenhams out of liquidation for £55 million, 
    in a deal that will allow the 242-year-old department store brand to survive but its stores will shut down. 
    Boohoo's deal only includes Debenhams' brand and other business assets including all the in-house brands and websites, 
    and will see Boohoo take ownership of Debenhams' ecommerce operations and products around the start of its next financial year in March.`
  },
  {
    title: 'Next buys Cath Kidson in £8.5 million deal',
    date: 'Mar 28, 2025',
    content: `
    LONDON, (BBC) - Retailer Next has bought floral fashion brand Cath Kidston from administrators 
    in a deal worth £8.5m. Next has taken on the name and intellectual property but not Cath Kidston's four shops. 
    Administrators PwC said the shops would stay open while "operations are wound down", 
    but added there would be redundancies.`
  },
]



export default function Home() {
  const title = "Home | Insolvent.ai"
  const { colorMode } = useColorMode();

  return (
    <>
      <Layout title={title}>
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
          <Grid templateColumns='repeat(3, 1fr)' gap={20} px={20} pt={10}>
            {dummyData.map((item, idx) => (
              <GridItem key={idx}>
                <NewsBlob title={item.title} date={item.date} content={item.content} />
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
      </Layout>
    </>
  )
}
