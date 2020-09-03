import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  console.log('Result: ', result);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log('Something went wrong!');
      setErrorMsg('omething went wrong!');
    }
  }
  useEffect(() => {
    console.log('start fetching');
    getResult(id);
  }, [])
  return (
    result ?
      <View>
        <Text style={styles.title}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image
              style={styles.image}
              source={{ uri: item }} />
          )}
        />
      </View>
      : null
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  }
})

export default ResultShowScreen;
