import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
        style={styles.image}
      />
      <View>
        <Text style={{fontSize:17,fontFamily:'outfit-bold'}}>
            {business?.name}
        </Text>
        <Text style={{fontSize:13,fontStyle: 'italic'}}>
            {business?.contactPerson}
        </Text>

        <View style={{paddingTop:3}}>
            <Text style={{
                fontSize:10,
                padding:3,
                color: Colors.BLUE4,
                backgroundColor: Colors.BLUE1,
                borderRadius: 3,
                overflow: 'hidden',
                alignItems: 'flex-start',
                fontFamily:'outfit-medium'}}>{business?.category.name}</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 10  
    },
    image: {
        width: 160,
        height: 100,
        borderRadius: 10
    }
})