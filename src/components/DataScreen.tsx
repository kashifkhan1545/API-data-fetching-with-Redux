// components/DataScreen.tsx

import React, { useEffect } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { fetchUserData } from '../actions/userActions';
import { FlatList, FlatListProps } from 'react-native';

interface User {
  user_ID: number;
  first_Name: string;
  last_Name: string;
  user_Email: string;
  user_Contact: string;
  user_Password: string;
}

const DataScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.data);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.first_Name} {item.last_Name}</Text>
      <Text>Email: {item.user_Email}</Text>
      <Text>Contact: {item.user_Contact}</Text>
      <Text>Password: {item.user_Password}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList<User>
  data={userData}
  renderItem={renderItem}
  keyExtractor={(item) => item.user_ID.toString()}
/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:12,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default DataScreen;
