import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({business}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} 
      onPress={()=>navigation.push('business-detail',{business:business})}
    >
      <Image source={{uri:business?.images[0]?.url}} 
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <Text style={{fontFamily: 'outfit-bold',fontSize:19}}>{business.name}</Text>
        <Text style={{fontFamily: 'outfit',color:Colors.GREY}}>{business.contactPerson}</Text>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Ionicons name="location-sharp" size={20} color={Colors.BLUE2} 
            style={{marginRight:2}}
            />
            <Text style={{fontFamily: 'outfit',color:Colors.GREY,fontSize:16}}>
                {business.address1}
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    subContainer: {
        display: 'flex',
        gap: 8
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    }
})