import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { set } from 'react-native-reanimated';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMsg, searchAPI] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      <Text>{term}</Text>
      <Text>We have found {results.length} results</Text>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen;
