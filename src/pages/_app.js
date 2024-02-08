import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider, CSSReset, ColorModeScript } from '@chakra-ui/react'
import theme from '@/components/theme'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
