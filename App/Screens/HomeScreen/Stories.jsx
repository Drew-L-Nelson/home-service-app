import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../Utils/firebase-config';
// import { getFirebaseStories } from '../../Utils/FirebaseModules/APIs/getStories';

const storiesRef = collection(db, 'Stories');


export default function Stories() {

    const [stories, setStories] = useState([]);
    const [stories2, setStories2] = useState([]);

    const getFirebaseStories = async () => {
        const storiesSnapshot = await getDocs(storiesRef);
        storiesSnapshot.forEach((doc) => {
            // console.log('doc.id: ', doc.id, ' => ', doc.data());
            setStories2(stories2 => [
                ...stories2, doc.data()
            ])
        })
    };

    const getStories = () => {
        GlobalApi.getStories().then(resp => {
            setStories(resp?.stories)
        })
    }

    useEffect(() => {
        getStories();
    }, [])

    useEffect(() => {
        getFirebaseStories();
        console.log('stories2 => ', stories2)
    }, [])

    return (
        <View>
            <Heading text={"Upcoming Events"} isViewAll={true}/>
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