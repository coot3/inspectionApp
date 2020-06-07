import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Modal, TouchableOpacity, FlatList, ScrollView, Item} from 'react-native';

const InputNewDict = props => {
    const [ newDictInput, setNewDictInput ] = useState('')
    
    const newInputHandler = (input) => {
        setNewDictInput(input)
        }

    const addNewInputToDictHandler = (newInput) => {
        if (newInput === '') {
            return
        }
        props.addInputHandler(newInput);
        props.dict.push(newInput);
        if (props.bearingNeeded === 'yes') {
            props.setModalVisible(true);
        }
        setNewDictInput('')
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputBox} onChangeText={newInputHandler} value={newDictInput} />
            <Button title='>' onPress={() => addNewInputToDictHandler(newDictInput)}/>            
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
    },
    inputBox: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%'
    },
})

export default InputNewDict