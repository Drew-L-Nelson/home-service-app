import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading() {
  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    heading: {
        fontSize:20,
        fontFamily: 'outfit-medium',
        marginBottom:10,
        marginTop:10
    }
})