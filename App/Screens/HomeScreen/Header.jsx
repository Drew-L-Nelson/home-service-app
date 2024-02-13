import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';

export default function Header() {
    const {user, isLoading} = useUser();

    return user&&(
        <View style={styles.container}>
            <View>
                <Image source={{ uri: user?.imageUrl }}
                style={styles.userImage} />
                <View>
                    <Text style={{color: Colors.WHITE}}>Welcome, </Text>
                    <Text style={{color: Colors.WHITE}}>{user.firstName} 🙂</Text>
                </View>
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
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    }
})