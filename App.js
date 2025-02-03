import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-paper-dropdown';
import { Provider as PaperProvider } from 'react-native-paper';
import {Pstyles} from './styles/Styles.js'

const STYPES = [
  { label: 'Ball games', value: 'bgames' },
  { label: 'Gym', value: 'gym' },
]

export default function App() {
  const [stype, setStype] = useState();

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Dropdown
          placeholder='Select sport type'
          label='sport type'
          options={STYPES}
          value={stype}
          onSelect={setStype}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
    
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
