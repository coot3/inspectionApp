import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DefectRegisterScreen from './screens/DefectRegisterScreen';
import DefectScreen from './screens/DefectScreen';

export default function App() {

  const [ nav, setNav ] = useState('')
  const [ defectRegister, setDefectRegister ] = useState([])
  const [ location, setLocation ] = useState('')

  const navHandler = (page) => {
    setNav(page)
  }

  const addLocationHandler = (newLocation) => {
    setModalVisible(false)
    setLocation(newLocation)
    setNav('DefectScreen')

  }


  let content = <DefectRegisterScreen onNav={navHandler} onAddLocation={addLocationHandler} defectRegister={defectRegister} location={location} setLocation={setLocation} />

  if (nav === 'DefectScreen') {
    content = <DefectScreen onNav={navHandler} location={location} defectRegister={defectRegister} setDefectRegister={setDefectRegister} />
  } else if (nav === 'LocationScreen') {
    content = <DefectRegisterScreen onNav={navHandler} onAddLocation={addLocationHandler} setDefectRegister={setDefectRegister} defectRegister={defectRegister} location={location} setLocation={setLocation} />
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Property Address
        </Text>
      </View>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    marginTop: 30
  },
});
