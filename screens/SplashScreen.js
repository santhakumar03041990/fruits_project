import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Go')
        }, 5000);
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../assets/splashscreen.png')}>

            </ImageBackground>
        );
    }
}