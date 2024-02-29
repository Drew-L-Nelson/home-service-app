import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function BusinessPhotos({business}) {
  return (
    <View style={{marginTop:-10}}>
        <View style={{marginLeft:-20}}>
            <Heading text={'Photos'}/>
        </View>
        <FlatList 
            data={business.images}
            renderItem={({item})=>(
                <Image source={{uri:item.url}} 
                    style={{width:'100%',height:120}}
                />
            )}
        />
    </View>
  )
}