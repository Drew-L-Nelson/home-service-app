import { View, TextInput, StyleSheet, useState, useRef, ScrollView } from 'react-native'
import React from 'react'
import Heading from './Heading'

const [note, setNote] = useState();
const [isFocused, setIsFocused] = useState(false);

const scrollViewRef = useRef(null);

export default function TextInput() {
  return (
    <ScrollView
        ref={scrollViewRef}
    >
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
    }
})