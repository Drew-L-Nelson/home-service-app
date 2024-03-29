import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../../Utils/Colors';
import BusinessPhotos from './BusinessPhotos';
import BusinessAbout from './BusinessAbout';
import BusinessDetailsButtons from '../../Components/Buttons/BusinessDetailsButtons';

export default function BusinessDetailsScreen() {

  const param = useRoute().params;
  const navigation = useNavigation();
  const [business, setBusiness] = useState(param.business);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <View style={{flex:1}}>
      <ScrollView>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backBtnContainer}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Image source={{uri:business?.images[0]?.url}} 
          style={{width:'100%',height:300}}
        />
        <View style={styles.infoContainer}>
          <Text style={{fontFamily:'outfit-bold',
          fontSize:25}}>{business?.name}</Text>
          <View style={styles.subContainer}>
            <Text style={{
              fontFamily:'outfit-medium',
              color:Colors.BLUE2,
              fontSize:20}}>{business?.contactPerson} 🌟 </Text>
            <Text style={{
              color:Colors.BLUE4,
              backgroundColor:Colors.ORANGE1,
              fontSize:14,
              padding:3,
              borderRadius:5,
              overflow: 'hidden'
              }}>{business?.category.name}</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Ionicons name="location-sharp" size={35} color={Colors.BLUE} 
              style={{marginRight:5,marginLeft:-4}}/>
            <View>
              <Text style={styles.addressText}>{business?.address1}</Text>
              <Text style={styles.addressText}>{business?.address2}</Text>
            </View>
          </View>

          {/* Horizontal Line */}
          <View style={{borderWidth:0.7,
            borderColor:Colors.GREY,
            marginTop:20,
            marginBottom:20}}
          >
            {/* Horizontal Line */}
          </View>

          {/* About Section */}
          <BusinessAbout business={business}/>

          {/* Horizontal Line */}
          <View style={{borderWidth:0.7,
            borderColor:Colors.GREY,
            marginTop:30,
            marginBottom:20}}
          >
            {/* Horizontal Line */}
          </View>

          <BusinessPhotos business={business} />

        </View>
      </ScrollView>

      {/* Buttons */}

      <View style={{
        position: 'absolute', // Position buttons absolutely
        bottom: 0, // At the bottom of the parent View
        left: 0,
        right: 0,
        zIndex:10,
        backgroundColor: 'white'
      }}>
        <BusinessDetailsButtons /> 
      </View>

    </View>
  )
}

const styles = StyleSheet.create ({
  backBtnContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    margin: 9,
    borderRadius: 99,
    backgroundColor: 'rgba(128, 128, 128, 0.4)'
  },
  infoContainer: {
    padding: 20,
    display: 'flex',
    gap: 7
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  addressText: {
    fontSize: 17,
    fontFamily: 'outfit-medium',
    color:Colors.GREY
  }
})