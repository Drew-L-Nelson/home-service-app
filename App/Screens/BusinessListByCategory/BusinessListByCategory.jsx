import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function BusinessListByCategory() {

    const param = useRoute().params;
    const navigation = useNavigation();

    useEffect(() => {
        console.log('Category', param.category);
    },[])

    return (
        <View style={{padding:20}}>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{fontSize: 25,fontFamily:'outfit-medium'}}>{param.category}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    iconView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})