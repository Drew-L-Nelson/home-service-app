import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontSize:17,fontFamily:'outfit-bold'}}>
            {business?.name}
        </Text>
        <Text style={{fontSize:13,fontStyle: 'italic', color:Colors.GREY}}>
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
                alignSelf: 'flex-start',
                paddingHorizontal: 7,
                fontFamily:'outfit-medium'}}>{business?.category.name}</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        //margin for card set to 7. paddingHorizontal in BusinessList is adjusted to 13
        margin: 7,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 2  
    },
    infoContainer: {
        padding: 7,
        display: 'flex',
        gap: 3
    },
    image: {
        width: 160,
        height: 100,
        borderRadius: 10
    }
})

    // shadowColor: "#000", // Black color for the shadow
    // shadowOffset: {
    //     width: 0, // slight shadow on the sides
    //     height: 4, // darker shadow on the bottom
    // },
    // shadowOpacity: 0.3, // Adjust opacity to make the shadow lighter or darker
    // shadowRadius: 5,