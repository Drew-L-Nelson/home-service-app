import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import Stories from './Stories'

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View style={{padding:20}}>
        <Stories />
        <Slider />
        <Categories />
      </View>
    </View>
  )
}