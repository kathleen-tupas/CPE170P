import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Ube Halaya</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        1 lb. grated purple yam<br />
        1 14 oz. can condensed milk<br />
        2 cups coconut milk<br />
        3 tablespoons butter<br />
        1 teaspoon ube flavoring<br />
        1/2 cup shredded cheddar cheese<br />
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