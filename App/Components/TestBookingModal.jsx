// 🌟💥🚀🌟💥🚀 TEST MODAL FOR SCROLL AND KEYBOARD HIDING FUNCTIONALITY


import { View, Text, StyleSheet, 
    FlatList, TouchableOpacity, 
    TextInput, KeyboardAvoidingView, 
    ScrollView, Platform, Keyboard,
    TouchableWithoutFeedback
    } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import ModalCloseButton from '../Components/Buttons/ModalCloseButton'
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../Utils/Colors'
import Heading from '../Components/Heading'
import GlobalApi from '../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'

export default function TestBookingModal({businessID, hideModal}) {

    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [note, setNote] = useState();
    const [isFocused, setIsFocused] = useState(false);

    const scrollViewRef = useRef(null);
    const { user } = useUser();

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

    const createNewBooking = () => {
        const data={
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress.emailAddress,
            time: selectedTime,
            date: selectedStartDate,
            note: note,
            businessID: businessID
        }
        GlobalApi.createBooking(data).then(resp=>{
            console.log('Response ==> ', resp)
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                ref={scrollViewRef}
            >
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
                        onFocus={()=> {
                            setIsFocused(true);
                            setTimeout(() => scrollViewRef.current.scrollToEnd({ animated: true }), 100);
                        }}
                        onBlur={()=>setIsFocused(false)}
                        style={[
                            styles.noteText,
                            isFocused ? { marginBottom: 1 } : {}
                        ]} 
                        numberOfLines={6}
                        multiline={true}
                        cursorColor={'blue'}
                        placeholderTextColor={Colors.GREY}
                        onChange={(text)=>setNote(text)}
                    />
                </View>
                {/* Confirmation Button */}
                <TouchableOpacity 
                    style={styles.confirmButtonView}
                    onPress={()=>createNewBooking()}
                >
                    <Text style={styles.confirmButton}>Confirm & Book</Text>
                </TouchableOpacity>

            </ScrollView>
        </TouchableWithoutFeedback>                           
    </KeyboardAvoidingView>
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
        padding: 10,
        fontSize: 16,
        fontFamily: 'outfit',
        borderColor: Colors.BLUE2,
    },
    confirmButton: {
        margin: 10,
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        fontSize: 17,
        backgroundColor: Colors.BLUE3,
        color: Colors.WHITE,
        padding: 10,
        borderRadius: 16,
        overflow: 'hidden'
    },
    confirmButtonView: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
})