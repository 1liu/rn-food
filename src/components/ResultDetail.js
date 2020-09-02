import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ResultDetail = ({ result }) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: result.image_url }}
      />
      <Text style={styles.title}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    marginLeft: 5,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 10,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default ResultDetail;
