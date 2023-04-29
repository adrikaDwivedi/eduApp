import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuCont}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("About")}
            >
                {/* <Text>About</Text> */}
                <Image
                    style={styles.iconStyle}
                    source={require('../../assests/icons8-about-100.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Course")}
            >
                <Image
                    source={require('../../assests/books.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Student")}
            >
                <Image
                    style={styles.student}
                    source={require('../../assests/student.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Contact")}
            >
                <Image
                    source={require('../../assests/contact.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    menuCont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textStyle: {
        textTransform: 'uppercase',
    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
    student: {
        width: 30,
        height: 50,
    
    },
})
export default Menu;
