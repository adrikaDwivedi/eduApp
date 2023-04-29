import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserData from './UserData';

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (!name && !email && !phone && !message) {
      alert("Fill all the fields");
    }
    else {
      alert(`Thankyou ${name} for contacting`);
      navigation.navigate("Home");
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
      <Text style={styles.desc}>
        You can reach us anytime via @adrikad97@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Name   </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Your Name:"}
          value={name}
          onChangeText={(userdata) => setName(userdata)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Email   </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@abd@gmail.com"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Mobile Number:   </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"9889XXXXX"}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Name   </Text>
        <TextInput
          style={[styles.inputStyle, styles.multlineStyle]}
          placeholder={"Tell us about youself"}
          numberOfLines={6}
          multline={true}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonStyle,
        {},
        ]}
        onPress={submit}
      ><Text style={styles.buttonText}>Submit </Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 2,
  },
  labels: {
    fontWeight: "bold",
    color: '#7d7d7d',
    paddingBottom: 5,
    lineHeight: 25
  },
  multline: {
    paddingVertical: 25
  },
  buttonStyle: {
    width: '50%',
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
    backgroundColor: '#a8dadc'
  },
  buttonText: {
    alignSelf: 'center',
  },
})
export default Contact