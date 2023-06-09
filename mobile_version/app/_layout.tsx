import { styled } from "nativewind"
import blurBg from '../src/assets/luz.png'
import Stripes from '../src/assets/stripes.svg'
import { ImageBackground } from "react-native"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { SplashScreen, Stack } from "expo-router"
import * as SecureStore from "expo-secure-store"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"

const StyledStripes = styled(Stripes)

export default function Layout() {
  const [isUserAuthentticated, setIsUserAuthenticate] = useState<null | boolean>(
    null
  )
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then(token => {
      console.log(!!token)
      setIsUserAuthenticate(!!token)
    })
  }, [])

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={blurBg}
      imageStyle={{ position: 'absolute', left: '-100%' }}
      className='bg-gray-900 flex-1 relative'>
      <StyledStripes className='absolute left-2' />
      <StatusBar style="light" translucent />

      <Stack
        screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' }
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthentticated}/>
        <Stack.Screen name="new"/>
        <Stack.Screen name="memories"/>
      </Stack>
    </ImageBackground>
  )
}