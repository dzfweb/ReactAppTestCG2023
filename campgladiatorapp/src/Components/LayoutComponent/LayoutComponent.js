import React from 'react'

//Ui Dependencies
import {
    ChakraProvider,
    Box,
    theme,
    Flex,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';

  
//Color Switcher Component
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

//Logo source
import Logo from "../../assets/logo.png"

const LayoutComponent = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>

      {/* Header start */}
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <a href='/'>
              <img className="logo" src={Logo} alt="Logo"/>
            </a>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <ColorModeSwitcher justifySelf="flex-end" />

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {/* Header end */}

      <Box p={6}>
        {/* content */}
        { children }
      </Box>

    </ChakraProvider>
  )
}

export default LayoutComponent