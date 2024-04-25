import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import Stories from './Stories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <View>
          {/* <Stories /> */}
          <Slider />
          <BusinessList />
          <Categories />
        </View>
      </ScrollView>
    </View>
  )
}