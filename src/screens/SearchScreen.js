import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMsg, searchAPI] = useResults();

  const filterResultsByPrice = price => {
    //price === '$'
    return results.filter(result => result.price === price);
  }
  //console.log(results)
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
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
      <ResultsList title="Bit Spender" results={filterResultsByPrice('$$$')} />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen;
