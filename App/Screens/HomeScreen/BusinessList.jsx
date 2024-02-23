import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

export default function BusinessList() {

    const [business, setBusiness] = useState([]);

    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(resp => {
            console.log('resp', resp.businessLists)
            setBusiness(resp?.businessLists)
        })
    }

    useEffect(() => {
        getBusinessList();
    },[])

    return (
        <View>
            <Heading text={'Business List'} isViewAll={true}/>

            <FlatList 
                data={business}
                renderItem={({item,index})=>(
                    <View>
                        <Text>{item?.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}