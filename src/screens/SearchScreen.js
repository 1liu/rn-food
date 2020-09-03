import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <Text style={{ textAlign: 'center' }}>We have found {results.length} results</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />

      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {results.length === 0 ?
        <Text style={{ textAlign: 'center' }}>Waiting for position</Text>
        : <ScrollView>
          <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
          <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
          <ResultsList title="Bit Spender" results={filterResultsByPrice('$$$')} />
        </ScrollView>
      }

    </>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen;
