import { View, Text } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function BookingScreen() {
  return (
    <View>
      <Heading text={"Book us for an event!"} isViewAll={false}/>
    </View>
  )
}