import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalCloseButton from '../../Components/Buttons/ModalCloseButton'
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../../Utils/Colors'
import Heading from '../../Components/Heading'

export default function BookingModal({hideModal}) {

    const [timeList, setTimeList] = useState();

    const getTime = () => {
        const timeList = [];
        for(let i=8; i <=12;i++) {
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i=1; i <=7;i++) {
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList);
    }

    useEffect(() => {
        getTime();
    },[])

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
        {/* Time Select Section */}
        <View style={styles.timeContainer}>
            <FlatList 
                data={timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=>(
                    <TouchableOpacity>
                        <Text style={styles.unSelectedTime}>{item.time}</Text>
                    </TouchableOpacity>
                )}
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
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 15
    },
    timeContainer: {
        marginLeft: 8,
    },
    unSelectedTime: {
        padding: 5,
        borderWidth: 1,
        borderColor: Colors.BLUE3
    }
})