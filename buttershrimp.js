import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Garlic Butter Shrimp</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        2 lbs shrimp cleaned<br />
        2 tablespoons parsley chopped<br />
        1/4 cup butter<br />
        1 head garlic crushed<br />
        1 cup lemon lime soda<br />
        1 teaspoon lemon juice<br />
        salt and pepper to taste<br />
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