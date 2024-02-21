import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

export default function Slider() {

    const [slider, setSlider] = useState([]);

    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {
            console.log('resp', resp.sliders);
            setSlider(resp?.sliders);
        })
    }

    useEffect(() => {
        getSliders();
    }, [])

    return (
        <View>
        <Heading text={'Offers For You'}/>
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
    )
}

const styles = StyleSheet.create({
    sliderImage: {
        width: 335,
        height: 150,
        borderRadius: 30,
        objectFit: 'contain'
    },
    scrollLeft: {
        paddingHorizontal: 20,
        marginRight: -20
    }
})