import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {

    const [business, setBusiness] = useState([]);

    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(resp => {
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
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <View>
                        <BusinessListItemSmall business={item}/>
                    </View>
                )}
            />
        </View>
    )
}