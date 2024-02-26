import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function BusinessListByCategory() {

    const param = useRoute().params;

    useEffect(() => {
        console.log('Category', param.category);
    },[])

    return (
        <View style={{padding:20}}>
            <View style={styles.iconView}>
                <Ionicons name="arrow-back-outline" size={30} color="black" />
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