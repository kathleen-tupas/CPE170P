import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Adobo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sinigang',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Menudo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Kare-Kare',
  },
    
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 3,
    borderColor: "yellowgreen",
    marginVertical: 10,
    marginHorizontal: 30,
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
  },
});

export default App;