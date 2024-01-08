import { extendTheme } from "@chakra-ui/react";
import { BUILD_ID_FILE } from "next/dist/shared/lib/constants";

const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: true,
})

export default theme