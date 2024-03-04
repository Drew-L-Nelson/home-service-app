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
                    <View style={styles.scrollLeft}>
                        <BusinessListItemSmall business={item}/>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    scrollLeft: {
        //paddingHorizontal here is 13, not 20
        //Margin for the card in BusinessListItemSmall is 7 to add up to 20
        paddingHorizontal: 13,
        marginRight: -20
    }
})