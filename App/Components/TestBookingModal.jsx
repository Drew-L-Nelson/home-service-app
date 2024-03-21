// 🌟💥🚀🌟💥🚀 TEST MODAL FOR SCROLL AND KEYBOARD HIDING FUNCTIONALITY


import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalCloseButton from '../Components/Buttons/ModalCloseButton'
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../Utils/Colors'
import Heading from '../Components/Heading'

export default function TestBookingModal({hideModal}) {

    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedStartDate, setSelectedStartDate] = useState(null);

    const onDateChange = (date) => {
        setSelectedStartDate(date);
      };

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
                onDateChange={onDateChange} 
                minDate={Date.now()}
                todayBackgroundColor={Colors.BLUE2}
                todayTextStyle={{color:Colors.WHITE}}
                selectedDayColor={Colors.BLUE2}
                selectedDayTextColor={Colors.WHITE}
            />
        </View>
        {/* Time Select Section */}
        <Heading text={'Select Time Slot'}/>
        <View style={styles.timeContainer}>
            <FlatList 
                data={timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=>(
                    <TouchableOpacity style={{marginRight: 10}}
                        onPress={()=>setSelectedTime(item.time)}
                    >
                        <Text style={[selectedTime === item.time ? styles.selectedTime : 
                        styles.unSelectedTime]}
                        
                        >{item.time}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
        {/* Note Section */}
        <View>
            <Heading text={'Any Suggestion Note'}/>
            <TextInput 
                placeholder='Note' 
                style={styles.noteText} 
                numberOfLines={6}
                multiline={true}
                cursorColor={'blue'}
                placeholderTextColor={Colors.GREY}
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
        paddingBottom: 0
    },
    selectedTime: {
        padding: 10,
        marginBottom: 2,
        borderWidth: 2,
        borderColor: Colors.BLUE3,
        borderRadius: 21,
        paddingHorizontal: 18,
        backgroundColor: Colors.BLUE3,
        color: Colors.WHITE,
        overflow: 'hidden'
    },
    unSelectedTime: {
        padding: 10,
        marginBottom: 2,
        borderWidth: 2,
        borderColor: Colors.BLUE3,
        borderRadius: 21,
        paddingHorizontal: 18,
        color: Colors.BLUE3
    },
    noteText: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 15,
        height: 120,
        textAlignVertical: 'top',
    }
})