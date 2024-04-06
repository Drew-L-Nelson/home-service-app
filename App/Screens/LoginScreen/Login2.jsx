import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../Utils/firebase-auth';
import { useAuth } from '../../Utils/authContext';
import { useNavigation } from '@react-navigation/native';

export default function Login2() {

    const { userLoggedIn } = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
                .catch(error => {
                    setErrorMessage(error.message);
                    setIsSigningIn(false);
                })
            // doSendEmailVerification()
        }
    }

    // const onGoogleSignIn = (e) => {
    //     e.preventDefault()
    //     if (!isSigningIn) {
    //         setIsSigningIn(true)
    //         doSignInWithGoogle().catch(err => {
    //             setIsSigningIn(false)
    //         })
    //     }
    // }

    const onGoogleSignIn = async () => {
        if (!isSigningIn) {
          setIsSigningIn(true);
          try {
            const userCredential = await doSignInWithGoogle();
            console.log(userCredential);
            // Handle successful sign in
          } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
          } finally {
            setIsSigningIn(false);
          }
        }
      };

    // Redirect if logged in
    if (userLoggedIn) {
        navigation.reset({
            index: 0,
            routes: [{ name: 'home-screen' }]
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Welcome Back</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCompleteType="email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    textContentType="password"
                    autoCompleteType="password"
                    value={password}
                    onChangeText={setPassword}
                />
                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
                <TouchableOpacity
                    style={[styles.button, isSigningIn && styles.buttonDisabled]}
                    onPress={onSubmit}
                    disabled={isSigningIn}
                >
                    {isSigningIn ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Sign In</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('register-screen')}>
                    <Text style={styles.link}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline, isSigningIn && styles.buttonDisabled]}
                    onPress={onGoogleSignIn}
                    disabled={isSigningIn}
                >
                    {isSigningIn ? (
                        <ActivityIndicator />
                    ) : (
                        <Text style={styles.buttonOutlineText}>Continue with Google</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: '80%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        marginBottom: 20,
    },
    error: {
        color: 'red',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'indigo',
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonDisabled: {
        backgroundColor: 'grey',
    },
    link: {
        color: 'blue',
        textAlign: 'center',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    dividerText: {
        marginHorizontal: 10,
    },
    buttonOutline: {
        borderColor: 'grey',
        borderWidth: 1,
    },
    buttonOutlineText: {
        color: 'grey',
    },
});