import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { set } from 'react-native-reanimated';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
      />
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen;
