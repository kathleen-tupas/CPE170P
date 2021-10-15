import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Ginataang Alimango</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        3 lbs blue crabs Alimasag<br />
        2 tbsp shrimp paste<br />
        1 tbsp fish sauce<br />
        1 tsp garlic minced<br />
        1 piece onion minced<br />
        1 thumb ginger cut into thin strips<br />
        3 tbsp cooking oil<br />
        4 cups coconut milk<br />
        ½ tsp ground black pepper<br />
        1 bunch fresh spinach<br />
        6 pieces Thai chili<br />
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