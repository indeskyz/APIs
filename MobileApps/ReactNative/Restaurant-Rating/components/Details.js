import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-ratings';
import AsyncStorage from '@react-native-community/async-storage';
import MapView from 'react-native-maps';

const Details = ({navigation}) => {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Add Address "
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
          onChangeText={(address) => setAddress(address)}
          defaultValue={address}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number, eg 647-999-0000 "
          keyboardType="number-pad"
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          defaultValue={phoneNumber}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Description"
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
          onChangeText={(description) => setDescription(description)}
          defaultValue={description}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Tags"
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
          onChangeText={(tags) => setTags(tags)}
          defaultValue={tags}
        />

        <AirbnbRating ratingCount={5} size={45} reviewColor="black" />
      </View>
      <MapView showsUserLocation={true} style={{flex: 2}}></MapView>
      <Button
        title="Return"
        color="#c2847a"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454b66',
  },
  TextInput: {
    fontSize: 25,
  },
});

export {Details};
