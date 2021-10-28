import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Kare-Kare</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        3 lbs oxtail <br />
        1 piece small banana flower bud <br />
        1 bundle pechay <br />
        1 bundle string beans <br />
        4 pieces eggplants <br />
        1 cup ground peanuts<br />
        1/2 cup peanut butter<br />
        1/2 cup shrimp paste<br />
        1 Liter water<br />
        1/2 cup annatto seeds<br />
        1/2 cup toasted ground rice<br />
        1 tbsp garlic<br />
        1 piece onion <br />
salt and pepper
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