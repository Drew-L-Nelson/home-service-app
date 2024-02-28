import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function BusinessDetailsScreen() {

  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);

  return (
    <View>
      <Text>Hello</Text>
      <Image source={{uri:business?.images[0]?.url}} 
        style={{width:'100%',height:300}}
      />
    </View>
  )
}