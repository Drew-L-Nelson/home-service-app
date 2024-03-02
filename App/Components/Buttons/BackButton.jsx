import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'  
import { Ionicons } from '@expo/vector-icons';


export default function BackButton({title}) {

    const param = useRoute().params;
    const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backBtnContainer}>
            <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{fontSize: 25,fontFamily:'outfit-medium'}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    backBtnContainer: {
        position: 'absolute',
        zIndex: 10,
        padding: 10,
        margin: 9,
        borderRadius: 99,
        backgroundColor: 'rgba(128, 128, 128, 0.4)'
      }
})