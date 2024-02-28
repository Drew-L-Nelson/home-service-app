import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

export default function Slider() {

    const [slider, setSlider] = useState([]);

    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {
            setSlider(resp?.sliders);
        })
    }

    useEffect(() => {
        getSliders();
    }, [])

    return (
        <View>
            <Heading text={'Offers For You'} isViewAll={true}/>
            <View style={styles.flatListContainer}>
                <FlatList 
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <View style={styles.scrollLeft}>
                        <Image source={{uri:item?.image?.url}}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
    sliderImage: {
        width: 335,
        height: 150,
        borderRadius: 24,
    },
    scrollLeft: {
        paddingHorizontal: 20,
        marginRight: -20
    }
})