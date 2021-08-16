import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import TodoListItem from './MyPlacesItems'


const MyPlaceList = ({myPlaces, onRemove, onToggle, Details}) =>{
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {myPlaces.map(myPlace => (
        <TodoListItem
          key={myPlace.id}
          {...myPlace}
          onRemove={onRemove}
          onToggle={onToggle}
          Details={Details}
        />
      ))}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'flex-end',
  },
});
export default MyPlaceList;