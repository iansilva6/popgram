import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Popgram</Text>
      </View>
      // <View style={{ backgroundColor: 'red', width: 100, height: 100, margin: 20 }}>
      //   <Text>Sanity check</Text>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 9, 
    flexDirection: 'row',
    justifyContent: 'center',
    //Sombra no iOS
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: {width:0,height:1},
    shadowRadius: 3,
    //Sombra no Android
    elevation: 3,
  },
  logo: {
      textAlign: 'center',
      color: '#000',
  }
})