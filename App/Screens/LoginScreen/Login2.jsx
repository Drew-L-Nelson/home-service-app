import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../Utils/firebase-auth';
import { useAuth } from '../../Utils/authContext';

export default function Login2() {

    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <View>
            <Text>Login2</Text>
        </View>
  )
}