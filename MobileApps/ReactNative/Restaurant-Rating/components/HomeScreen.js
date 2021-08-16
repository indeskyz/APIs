import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image source={require('../img/menu.png')} style={styles.menu} />
        </TouchableOpacity>
        <View>
          <Text style={styles.header}>Dining</Text>
          <Text style={styles.subHeader}>Diary</Text>
        </View>
      </View>
      <View>
        <Image source={require('../img/logo.png')} style={styles.logo} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454b66',
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: '#454b66',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  menu: {
    width: 60,
    height: 60,
  },
  header: {
    left: 125,
    fontSize: 70,
    bottom: 85,
    color: '#6974c9',
  },
  subHeader: {
    left: 140,
    fontSize: 70,
    bottom: 100,
    color: '#6974c9',
  },
  logo: {
    right: 20,
    width: 450,
    height: 450,
    backgroundColor: '#454b66',
  },
});

export {HomeScreen};
