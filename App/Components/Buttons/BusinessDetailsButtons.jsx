import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors'
import BookingModal from '../../Screens/BusinessDetailsScreen/BookingModal';

export default function BusinessDetailsButtons() {

    const [showModal, setShowModal] = useState(false);

  return (
    <View>
        <View style={{
            display:'flex',
            flexDirection:'row',
            margin:8,
            gap:8
        }}>
            <TouchableOpacity style={styles.messageBtn}>
            <Text style={{
                textAlign:'center',
                fontFamily:'outfit-medium',
                color:Colors.BLUE3,
                fontSize:18}}>Message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bookingBtn}
            onPress={()=>setShowModal(true)}>
            <Text style={{
                textAlign:'center',
                fontFamily:'outfit-medium',
                color:Colors.WHITE,
                fontSize:18}}>Book Now</Text>
            </TouchableOpacity>
        </View>

        {/* Booking Screen Modal */}
        <Modal
        animationType='slide'
        visible={showModal}
        >
            <BookingModal />
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create ({
    messageBtn: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.BLUE3,
        borderRadius: 99,
        flex:1
    },
    bookingBtn: {
        padding: 15,
        backgroundColor: Colors.BLUE3,
        borderWidth: 1,
        borderColor: Colors.BLUE3,
        borderRadius: 99,
        flex:1
    }
})