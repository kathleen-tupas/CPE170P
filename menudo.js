import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Menudo</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        2 lbs. pork <br />
        1/4 lb. pig liver <br />
        1 cup potatoes diced<br />
        1 piece carrot cubed<br />
        1/2 cup soy sauce<br />
        1/2 piece lemon<br />
        1 piece onion chopped<br />
        3 cloves garlic minced<br />
        1 teaspoon sugar<br />
        3/4 cup tomato sauce<br />
        1 cup water<br />
        4 pieces hotdogs sliced diagonally<br />
        2 tablespoons cooking oil<br />
        2 to 3 pieces dried bay leaves<br />
        Salt and pepper to taste<br />
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