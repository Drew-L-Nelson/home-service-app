import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
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
            <FlatList 
                data={stories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <View style={{marginRight:20}}>
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
        width: 200,
        height: 200,
        borderRadius: 30,
        objectFit: 'contain'
    }
})