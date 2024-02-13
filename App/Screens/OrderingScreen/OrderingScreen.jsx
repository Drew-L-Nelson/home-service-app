import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function OrderingScreen() {
  return (
    <View style={styles.subContainer}>
            <Text style={{fontSize: 27, color: Colors.BLUE, textAlign: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>Order Burgers Here</Text>
            </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    subContainer: {
        width: '100%',
        backgroundColor: Colors.ORANGE,
        height: '100%',
        marginTop: '-20',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20
    }
})