//components/Description.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';
const Description = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, In this project we will get data from API using redux. We will
        also use thunk here in fetching API. We will also use axios for
        fetching API data by installing and importing axios library.
      </Text>
      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Data')}
>
  <Text style={styles.buttonText}>Show API Data</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 140,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '75%',
    top: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Description;
