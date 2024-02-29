import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessDetailsButtons() {
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        margin:8,
        gap:8
    }}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            color:Colors.BLUE3,
            fontSize:18}}>Message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookingBtn}>
          <Text style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            color:Colors.WHITE,
            fontSize:18}}>Message</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
    messageBtn: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.BLUE3,
        borderRadius: 99,
        flex:1
    },
    bookingBtn: {
        padding: 15,
        backgroundColor: Colors.BLUE3,
        borderWidth: 1,
        borderColor: Colors.BLUE3,
        borderRadius: 99,
        flex:1
    }
})