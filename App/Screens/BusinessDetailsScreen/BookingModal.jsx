import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ModalCloseButton from '../../Components/Buttons/ModalCloseButton'

export default function BookingModal({hideModal}) {
  return (
    <View style={styles.container}>
      <ModalCloseButton title={'Booking'} hideModal={hideModal}/>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        paddingTop: 40
    }
})