import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Adobong Pusit</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        2 lbs. medium-sized squid <br />
        1 piece large onion diced <br />
        2 pieces medium sized tomatoes diced <br />
        1/2 cup soy sauce<br />
        1/2 cup vinegar<br />
        1 cup water<br />
        5 cloves crushed garlic<br />
        1 teaspoon sugar<br />
        Salt and pepper to taste<br />
        2 tbsp cooking oil<br />
        salt and pepper<br />
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