import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';

export default function Slider() {

    const [slider, setSlider] = useState();

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
        <Text>Slider</Text>
        </View>
    )
}