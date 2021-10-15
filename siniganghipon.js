import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Sinigang na Hipon</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        1 lb. shrimp <br />
        44 grams Sampaloc Mix <br />
        1 bunch kangkong <br />
        15 pieces snake beans <br />
        5 pieces okra <br />
        1 piece eggplant<br />
        1 cup daikon radish sliced<br />
        1 piece tomato sliced<br />
        3 pieces long green pepper<br />
        1 piece onion<br />
        2 quarts water<br />
        Fish sauce and ground black pepper <br />
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