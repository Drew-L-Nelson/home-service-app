import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';

export default function Categories() {

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            setCategories(resp?.categories)
        })
    }

useEffect(() => {
    getCategories();
}, [])

  return (
    <View>
        <Heading text={'Categories'}/>
        <FlatList 
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View style={{marginRight:20}}>
                    <Image
                        source={{uri:item?.icon?.url}}
                        style={styles.sliderImage}
                    />
                </View>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create ({
    sliderImage: {
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: 'white',
        objectFit: 'contain'
    }
})