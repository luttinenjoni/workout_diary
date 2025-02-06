import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Button } from 'react-native';
import { Dropdown } from 'react-native-paper-dropdown';
import { Provider as PaperProvider } from 'react-native-paper';
import Pstyles from './styles/Styles.js'
import InputSpinner from "react-native-input-spinner";

const STYPES = [
  { label: 'Jogging', value: 'Jogging' },
  { label: 'Swimming', value: 'Swimming' },
  { label: 'Cycling', value: 'Cycling' }
]

export default function App() {
  const [stype, setStype] = useState();
  const [inputInfo, SetInputInfo] = useState([])
  const [d, setD] = useState(0);
  const [duration, setDuration] = useState(0)
  

  function addSportsType() {
    SetInputInfo([...inputInfo ,'Sports type: ' + stype,'Distance: ' + d + ' km', 'Duration: ' + duration + ' minutes'])
  }

  return (
    <PaperProvider>
      <SafeAreaView style={Pstyles.container}>
        <Dropdown style={Pstyles.inputfield}
          placeholder='Select sport type'
          label='sport type'
          options={STYPES}
          value={stype}
          onSelect={setStype}
        />
        <Text style={Pstyles.InputSpinnerHeader} >Distance</Text>
        <InputSpinner
          value={d}
          onChange={setD}
        />
        <Text style={Pstyles.InputSpinnerHeader} >Duration</Text>
         <InputSpinner
          value={duration}
          onChange={setDuration}
        />
        
        <Button title='Add'
          
          onPress={addSportsType} 
        />

        <FlatList style={Pstyles.flatlist}
          data={inputInfo}
          renderItem={({item}) => <Text>{item}</Text>}
        
      />
      </SafeAreaView>
      
    </PaperProvider>
  );
}
