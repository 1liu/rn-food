import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from '../components/ResultDetail';

const ResultsList = ({ title, results }) => {

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <ResultDetail
            result={item}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  }
})

export default ResultsList;
