import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import GlobalApi from '../../Utils/GlobalApi';

export default function Slider() {

    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {
            console.log('resp', resp);
        })
    }

    useEffect(() => {
        getSliders();
    }, [])

    return (
        <View>
        <Text>Slider</Text>
        </View>
    )
}