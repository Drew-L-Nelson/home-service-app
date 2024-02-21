import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import Stories from './Stories'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        {/* <View style={{padding:20}}> */}
        <View>
          <Stories />
          <Slider />
          <Categories />
        </View>
      </ScrollView>
    </View>
  )
}