import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {user, isLoading} = useUser();

    return user&&(
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                    style={styles.userImage} />
                    <View>
                        <Text style={{color: Colors.WHITE, fontFamily: 'outfit'}}>Welcome, </Text>
                        <Text style={{color: Colors.WHITE, fontSize: 20, fontFamily: 'outfit-medium'}}>{user.firstName} 🙂</Text>
                    </View>
                </View>
                <Ionicons name="bookmark-outline" size={27} color="white" />
            </View>
            {/* Search Bar Section */}
            {/* <View style={styles.searchBarContainer}>
                <TextInput placeholder='Search'
                style={styles.textInput}/>
                <View style={styles.searchBtn}>
                    <Ionicons name="search" size={24} color={Colors.ORANGE2} />
                </View>
            </View> */}
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
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    searchBtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    }
})