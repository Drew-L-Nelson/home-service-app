import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Categories() {

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            console.log('resp', resp.categories)
            setCategories(resp?.categories)
        })
    }

useEffect(() => {
    getCategories();
}, [])

  return (
    <View>
        <Text style={styles.heading}>Categories</Text>
        <FlatList 
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View>
                    <Image
                        source={{uri:item?.image?.url}}
                        style={styles.sliderImage}
                    />
                </View>
            )}
        />


      {/* <FlatList 
            data={slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <View style={{marginRight:20}}>
                    <Image source={{uri:item?.image?.url}}
                        style={styles.sliderImage}
                    />
                </View>
            )}
        /> */}
    </View>
  )
}

const styles = StyleSheet.create ({
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10,
        marginTop: 10
    },
    sliderImage: {
        width: 150,
        height: 150,
        borderRadius: 30,
        objectFit: 'contain'
    }
})