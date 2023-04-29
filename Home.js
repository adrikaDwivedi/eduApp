import React from 'react'
import Menu from './component/Menu'
import { Image, StyleSheet, Text, View } from 'react-native'
const Home = () => {
  const description = "An education app - by the students - for the students. Help us by joining the campaign for the Right To Education for all."
  return (

    <View style={styles.maincontainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode='contain'
          source={require('../assests/headerimg.jpeg')}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[styles.mainHeader,
        {
          fontSize: 33,
          color: "#4c5dab",
          marginTop: 0,
        }

        ]}>EduApp</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle,
        {
          marginVertical: 20,
        }
        ]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    display: 'flex',
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: 'center'
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  lineStyle:{
    marginBottom: 20,
    borderWidth:1,
    borderColor: 'grey', 
  },
})
export default Home

