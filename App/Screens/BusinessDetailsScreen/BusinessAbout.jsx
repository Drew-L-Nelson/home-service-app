import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors'

export default function BusinessAbout({business}) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <View style={{marginBottom:-10,marginTop:-10}}>
          {/* Heading Container */}
          <View style={{marginLeft:-20}}>
            <Heading text={'About'}/>
          </View>
          
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={{fontFamily:'outfit',
              color:Colors.GREY,
              fontSize:16}}
              numberOfLines={isExpanded ? undefined : 3}
            >{business?.about}</Text>
          </TouchableOpacity>
          
        </View>
  )
}