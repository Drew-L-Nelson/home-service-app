import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ModalCloseButton from '../../Components/Buttons/ModalCloseButton'
import CalendarPicker from 'react-native-calendar-picker'

export default function BookingModal({hideModal}) {
  return (
    <View>
        <View style={styles.container}>
            <ModalCloseButton title={'Booking'} hideModal={hideModal}/>
        </View>
        <View>
            <CalendarPicker 
                onDateChange={this.onDateChange} 
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        paddingTop: 54
    }
})