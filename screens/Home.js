import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, TouchableWithoutFeedback, FlatList, Image } from 'react-native';

import { home_page_fruit_list } from './action';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataone: []
        }
    }


    componentDidMount = () => {

        home_page_fruit_list().then(res => {
            console.log('getHomePage_fruit_list: ', res.body);
            if (!res.error) {

                this.setState({
                    dataone: res.body,
                })

            } else {



            }

        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={require('../assets/splashscreen.png')}>

                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'stretch', marginRight: 10, marginLeft: 10, marginTop: 20 }}>


                        <FlatList


                            data={this.state.dataone}

                            showsVerticalScrollIndicator={false}

                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item, index }) => (

                                <View style={{ marginTop: 10, marginBottom: 10, width: '100%', height: 120, backgroundColor: 'white', borderRadius: 10 }}>

                                    <View style={{ flex: 1, width: '95%', marginLeft: 5, flexDirection: 'row' }}>

                                        <View style={{ marginLeft: 2 }}>
                                            {
                                                item.image ?
                                                    <Image source={{ uri: "http://" + item.image }} style={{ height: 100, width: 150, marginTop: 5, borderRadius: 10 }} />
                                                    :
                                                    <Image source={{ uri: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg' }} style={{ height: 100, width: 150, marginTop: 5 }} />

                                            }

                                        </View>

                                        <View style={{ marginTop: 5, height: 100, marginLeft: 10 }}>
                                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>{item.name}</Text>
                                            <View style={{ height: 20 }}></View>
                                            <Text style={{ fontSize: 15, color: 'grey', marginLeft: 10, fontWeight: 'bold' }}>{item.location}</Text>
                                        </View>


                                    </View>
                                </View>
                            )}
                        />




                    </View>
                </ImageBackground>
            </View>
        );
    }
}