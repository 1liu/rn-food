import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import ResultDetail from '../components/ResultDetail';

const ResultsList = ({ title, results, navigation }) => {
  return (
    results.length !== 0 ? <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Result', { id: item.id })}
          >
            <ResultDetail
              result={item}
            />
          </TouchableOpacity>
        )}
      />
    </View>
      : null
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  }
})

export default withNavigation(ResultsList);
