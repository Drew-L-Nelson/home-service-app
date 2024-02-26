import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const navigation = useNavigation();

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
                <TouchableOpacity 
                    onPress={()=>navigation.push('business-list',{
                        category:item.name
                    })}
                    style={styles.container}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={{uri:item?.icon?.url}}
                            style={styles.sliderImage}
                        />
                    </View>
                    <Text style={{fontFamily:'outfit-medium',marginTop:5}}>{item?.name}</Text>
                </TouchableOpacity>
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