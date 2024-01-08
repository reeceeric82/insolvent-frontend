import '@/styles/globals.css'
import { ChakraProvider, CSSReset, ColorModeScript } from '@chakra-ui/react'
import theme from '@/components/theme'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
