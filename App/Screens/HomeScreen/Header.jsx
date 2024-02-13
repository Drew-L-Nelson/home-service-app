import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {user, isLoading} = useUser();

    return user&&(
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                    style={styles.userImage} />
                    <View>
                        <Text style={{color: Colors.WHITE}}>Welcome, </Text>
                        <Text style={{color: Colors.WHITE, fontSize: 20}}>{user.firstName} 🙂</Text>
                    </View>
                </View>
                <Ionicons name="bookmark-outline" size={24} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.ORANGE2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    }
})