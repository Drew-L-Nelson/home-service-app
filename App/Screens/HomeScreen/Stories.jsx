import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading'

export default function Stories() {

    const [stories, setStories] = useState([]);

    const getStories = () => {
        GlobalApi.getStories().then(resp => {
            console.log('resp', resp.stories)
            setStories(resp?.stories)
        })
    }

    useEffect(() => {
        getStories();
    }, [])

    return (
        <View>
            <Heading text={'Restaurant News'}/>
            
        </View>
    )
}