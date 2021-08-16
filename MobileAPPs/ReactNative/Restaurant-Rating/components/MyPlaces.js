import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import MyPlaceInsert from './AddNewPlace';

import MyPlaceList from './ListAllPlaces.js';

const MyPlaces = ({navigation}) => {
  const [myPlace, setMyPlace] = useState([]);

  const addPlace = (text) => {
    setMyPlace([
      ...myPlace,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = (id) => (e) => {
    setMyPlace(myPlace.filter((place) => place.id !== id));
  };

  const onToggle = (id) => (e) => {
    setMyPlace(
      myPlace.map((place) =>
        place.id === id ? {...place, checked: !place.checked} : place,
      ),
    );
  };
  const Details = () => {
    navigation.navigate('Details');
  };

  return (
    <>
      <View style={styles.containerNav}>
        <TouchableOpacity
          style={styles.buttonNav}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image source={require('../img/menu.png')} style={styles.menuNav} />
        </TouchableOpacity>
        <Text style={styles.header}>My Places</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <MyPlaceInsert onAddMyPlaces={addPlace} />
          <MyPlaceList
            myPlaces={myPlace}
            onRemove={onRemove}
            onToggle={onToggle}
            Details={Details}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export {MyPlaces};

const styles = StyleSheet.create({
  containerNav: {
    backgroundColor: '#454b66',
    alignItems: 'flex-start',
  },
  header: {
    left: 90,
    bottom: 80,
    fontSize: 65,
    color: '#6974c9',
  },
  buttonNav: {
    backgroundColor: '#454b66',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
    top: 7,
  },
  menuNav: {
    width: 60,
    height: 60,
  },

  container: {
    flex: 1,
    backgroundColor: '#454b66',
  },

  card: {
    backgroundColor: '#454b66',
    flex: 1,
    bottom: 10,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
});

export default MyPlaces;
