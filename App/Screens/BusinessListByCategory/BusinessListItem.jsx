import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItem({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}} 
        style={styles.image}
      />
      <View>
        <Text>{business.contactPerson}</Text>
        <Text>{business.name}</Text>
        <Text>{business.address1}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginBottom: 15
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    }
})