import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ModalCloseButton from '../../Components/Buttons/ModalCloseButton'
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../../Utils/Colors'
import Heading from '../../Components/Heading'

export default function BookingModal({hideModal}) {

  return (
    <View>
        <View style={styles.container}>
            <ModalCloseButton title={'Booking'} hideModal={hideModal}/>
        </View>
        <Heading text={'Select Date'} />
        <View style={styles.calendarContainer}>
            <CalendarPicker 
                onDateChange={this.onDateChange} 
                minDate={Date.now()}
                todayBackgroundColor={Colors.BLUE2}
                todayTextStyle={{color:Colors.WHITE}}
                selectedDayColor={{color:Colors.BLUE2}}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        paddingBottom: 0,
        paddingTop: 54
    },
    calendarContainer: {
        backgroundColor: Colors.CALENDAR_BACKGROUND,
        padding: 20,
        borderRadius: 15
    }
})