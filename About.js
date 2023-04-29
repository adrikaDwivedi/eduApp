import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Adrika Dwivedi</Text>
      <Text style={styles.paraStyle}>Mobile App Developer</Text>
      <View>
        <Image
          style={styles.imgStyle}
          source={require('../assests/about.jpg')}
        />
      </View>
      <View style={styles.aboutlayout}>
        <Text style={styles.subHeader}>
          About Me
        </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>loves to learn and apply, in my final semester of Bachelors Degree(BCA). Having keen interest in Java and App Development(using React Native and Ionic Framework) </Text>
      </View>
      <Text style={styles.mainHeader}>Follow me on Social Networking</Text>
      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/adrika-d-06a430218/")}
        >
          <Image style={styles.iconStyle}
            source={require('../assests/linkedin.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => Linking.openURL("https://www.instagram.com/aaadrika_dwivedi/")}
        >
          <Image style={styles.iconStyle}
            source={require('../assests/instagram.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 10,
    lineHeight: 30,
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
  },
  aboutlayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  subHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    lineHeight: 30,
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    width: '33%',
    height: 50,
    aspectRatio: 1,
  },
})
export default About