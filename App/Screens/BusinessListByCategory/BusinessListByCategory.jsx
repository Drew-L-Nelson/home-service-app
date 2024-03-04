import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '../../Utils/Colors';

export default function BusinessListByCategory() {

    const [businessList, setBusinessList] = useState([]);

    const param = useRoute().params;
    const navigation = useNavigation();

    useEffect(() => {
        param&&getBusinessByCategory();
    },[param])

    const getBusinessByCategory = () => {
        GlobalApi.getBusinessListByCategory(param.category).then(resp=> {
            setBusinessList(resp.businessLists);
        })
    }

    return (
        <View style={{padding:20}}>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{fontSize: 25,fontFamily:'outfit-medium'}}>{param.category}</Text>
            </View>
            {businessList?.length>0? <FlatList 
                data={businessList}
                style={{marginTop:15}}
                renderItem={({item, index})=>(
                    <BusinessListItem business={item}/>
                )}
            />: //ternary operator in case businessList has nothing
            <Text style={styles.noBusinessFound}>No Business Found</Text>}
        </View>
    )
}

const styles = StyleSheet.create ({
    noBusinessFound: {
        fontFamily: 'outfit-medium',
        color: Colors.GREY,
        fontSize: 20,
        textAlign: 'center',
        marginTop: '20%'
    },
    iconView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})