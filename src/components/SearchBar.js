import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='none' //add this
        autoCorrect={false}  // add this
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="Enter your input"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
  }
})

export default SearchBar;
