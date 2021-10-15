import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Halo-Halo</Text>
      <Text style={styles.title}>
        Ingredients:<br />
        2 cups of shaved ice<br />
        1 ripe large banana<br />
        1 cup young shredded coconut<br />
        1/2 cup sweet corn (garbanzos)<br />
        2 cups evaporated milk<br />
        1 cup firm gelatin <br />
        2 ripe mangoes<br />
        1 cup ripe jackfruit<br />
        1 cup of ube halaya<br />
        4 scoops of ice cream<br />
        1/2 cup rice pop<br />
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