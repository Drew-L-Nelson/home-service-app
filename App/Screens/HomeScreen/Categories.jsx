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
            horizontal={true}
            // numColumns={4}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{uri:item?.icon?.url}}
                            style={styles.sliderImage}
                        />
                    </View>
                    <Text style={{fontFamily:'outfit-medium',marginTop:5}}>{item?.name}</Text>
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
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconContainer: {
        borderColor: Colors.DARK_BLUE,
        borderWidth: 4,
        borderRadius: 99,
        padding: 17,
        backgroundColor: Colors.WHITE
    }
})