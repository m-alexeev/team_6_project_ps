import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingList from './src/views/ShoppingList';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ShoppingList></ShoppingList>
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
