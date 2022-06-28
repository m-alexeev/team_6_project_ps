import CheckBox from '@react-native-community/checkbox';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductCatalogue from './src/components/ProductCatalogue';
import ShoppingList from './src/components/ShoppingList';
import { Instantiator } from './src/models/Instantiator';

export default function App() {
  Instantiator.createStoreStructure();
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <ShoppingList></ShoppingList> */}
        <ProductCatalogue/>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
