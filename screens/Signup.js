import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

export default class Signup extends Component {

    signupmethod = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={require('../assets/splashscreen.png')}>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Register</Text>
                        <View style={{ height: 30 }}>

                        </View>
                        <TextInput style={{ width: 300, height: 50, backgroundColor: 'white', paddingLeft: 20, fontWeight: 'bold', borderRadius: 10 }} placeholder="Username" placeholderTextColor='grey' />

                        <View style={{ height: 30 }}>

                        </View>
                        <TextInput style={{ width: 300, height: 50, backgroundColor: 'white', paddingLeft: 20, fontWeight: 'bold', borderRadius: 10 }} placeholder="Email" placeholderTextColor='grey' />
                        <View style={{ height: 30 }}>

                        </View>
                        <TextInput style={{ width: 300, height: 50, backgroundColor: 'white', paddingLeft: 20, fontWeight: 'bold', borderRadius: 10 }} placeholder="Password" placeholderTextColor='grey' />

                        <View style={{ height: 30 }}>

                        </View>
                        <TextInput style={{ width: 300, height: 50, backgroundColor: 'white', paddingLeft: 20, fontWeight: 'bold', borderRadius: 10 }} placeholder="Phone" placeholderTextColor='grey' />

                        <View style={{ height: 30 }}>

                        </View>

                        <TouchableOpacity onPress={this.signupmethod}>
                            <View style={{ height: 50, width: 150, borderRadius: 100 / 2, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'white' }}>
                                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                                    signUp
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ height: 70 }}>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}