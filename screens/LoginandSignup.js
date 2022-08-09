import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default class LoginandSignup extends Component {

    loginmethod = () => {
        this.props.navigation.navigate('Login');
    }

    signupmethod = () => {
        this.props.navigation.navigate('Signup')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={require('../assets/splashscreen.png')}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                            <TouchableOpacity onPress={this.loginmethod}>

                                <View style={{ height: 50, width: 150, borderRadius: 100 / 2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderColor: 'red', borderWidth: 2 }}>
                                    <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>
                                        Login
                                    </Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.signupmethod}>

                                <View style={{ height: 50, width: 150, borderRadius: 100 / 2, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                                        Signup
                                    </Text>
                                </View>

                            </TouchableOpacity>


                        </View>
                        <View style={{ height: 50 }}>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}