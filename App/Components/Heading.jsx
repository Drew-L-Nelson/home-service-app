import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll=false}) {
  return (
    <View style={{paddingLeft: 20}}>
      <Text style={styles.heading}>
        {text}
      </Text>
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