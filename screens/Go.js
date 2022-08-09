import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';


export default class Go extends Component {

    constructor(props) {
        super(props);
    }

    pressGoButton = () => {
        this.props.navigation.navigate('LoginandSignup');
    }


    render() {

        return (
            <View style={{ flex: 1 }}>
                <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={require('../assets/splashscreen.png')}>

                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.pressGoButton}>
                            <View style={{ height: 50, width: 150, borderRadius: 100 / 2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}>
                                    Go
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ height: 70 }}>

                        </View>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    continter1: {
        height: 50,
        width: 40,
        backgroundColor: "yellow",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'red'

    }
})