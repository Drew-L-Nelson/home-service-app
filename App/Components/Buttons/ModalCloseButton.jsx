import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import { Ionicons } from '@expo/vector-icons';


export default function ModalCloseButton({title, hideModal}) {

    const navigation = useNavigation();

  return (
    <View style={styles.iconView}>
        <TouchableOpacity onPress={()=>hideModal()} style={styles.closeBtnContainer}>
            <Ionicons name="close-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize: 25,fontFamily:'outfit-medium'}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    closeBtnContainer: {
        padding: 10,
        borderRadius: 99,
        backgroundColor: 'rgba(128, 128, 128, 0.4)'
      },
      iconView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})