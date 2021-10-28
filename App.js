import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Sinigang</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        2 lbs pork belly <br />
        1 bunch spinach<br />
        3 tablespoons fish sauce <br />
        12 pieces string beans <br />
        2 pieces tomato <br />
        3 pieces chili <br />
        1 tablespoons cooking oil<br />
        2 quarts water<br />
        1 piece onion <br />
        2 pieces taro gabi<br />
        1 pack sinigang mix<br />
        Salt 
      </Text>
      <Button
        title="View Instructions"
        color='yellowgreen'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
   text: {
    color: 'yellowgreen',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
 
});

export default App;