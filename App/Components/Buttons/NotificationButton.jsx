import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';

const NotificationButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
        <TouchableOpacity style={styles.notificationBtn}
            onPress={()=>setModalVisible(true)}>
            <Text style={{
                textAlign:'center',
                fontFamily:'outfit-medium',
                color:Colors.WHITE,
                fontSize:18}}>Register for Notifications</Text>
        </TouchableOpacity>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                <Text>Register for Notifications</Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
            </View>
        </Modal>

    </View>
  );
};

const styles = StyleSheet.create ({
    notificationBtn: {
        padding: 15,
        backgroundColor: Colors.BLUE3,
        borderWidth: 1,
        borderColor: Colors.BLUE3,
        borderRadius: 15,
        flex:1, 
        margin: 8,
        marginBottom: 2
    }
})

// style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}

export default NotificationButton;