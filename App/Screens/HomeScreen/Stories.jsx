import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import { getFirebaseStories } from '../../Utils/FirebaseModules/APIs/getStories';

export default function Stories() {

    const [stories, setStories] = useState([]);

    const getStories = () => {
        GlobalApi.getStories().then(resp => {
            setStories(resp?.stories)
        })
    }

    useEffect(() => {
        getStories();
    }, [])

    const getStories2 = () => {
        getFirebaseStories().then(resp => {
            console.log('resp -->', resp)
        })
    }

    useEffect(() => {
        getStories2();
    }, [])

    return (
        <View>
            <Heading text={'Business News'} isViewAll={true}/>
            <View style={styles.flatListContainer}>
                <FlatList 
                data={stories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
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

const styles = StyleSheet.create ({
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
        width: 200,
        height: 200,
        borderRadius: 30,
        objectFit: 'contain'
    },
    scrollLeft: {
        paddingHorizontal: 20,
        marginRight: -20
    }
})