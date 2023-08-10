import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Nav Bar</Text>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar