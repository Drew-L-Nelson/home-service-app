import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';

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
        <Heading text={'Categories'} isViewAll={true}/>
        <FlatList 
            data={categories}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{uri:item?.icon?.url}}
                            style={styles.sliderImage}
                        />
                    </View>
                </View>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create ({
    sliderImage: {
        width: 30,
        height: 30,
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        borderRadius: 99,
        padding: 17,
        backgroundColor: Colors.BLUE
    }
})