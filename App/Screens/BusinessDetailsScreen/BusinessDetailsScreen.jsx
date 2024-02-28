import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../../Utils/Colors';

export default function BusinessDetailsScreen() {

  const param = useRoute().params;
  const navigation = useNavigation();
  const [business, setBusiness] = useState(param.business);

  return (
    <View>
      <Image source={{uri:business?.images[0]?.url}} 
        style={{width:'100%',height:300}}
      />
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
  backBtn: {
    position: 'absolute',
    zIndex: 10,
    padding: 17,
    margin: 2,
    borderRadius: 99,
    backgroundColor: 'rgba(128, 128, 128, 0.6)'
  }
})