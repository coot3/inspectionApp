import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';


import InputNewDict from '../components/InputNewDict'

const defectsDict = [
    'cmbr',
    'cc',
    'citj'
]

var defectCounter = 0
var locationCounter = 0

const DefectScreen = props => {

    const [ defectList, setDefectList ] = useState([{defect:'General View', id:defectCounter++}])
    const [ defect, setDefect ] = useState('')


    const addDefectHandler = (item) => {
        setDefectList([...defectList, {defect:item, id:defectCounter++}])
    }

    const removeDefectHandler = (itemId) => {
        setDefectList(defectList => {[]
            return defectList.filter((item) => item.id !== itemId);
        }
        )}

    const saveDefectsHandler = () => {
        props.setDefectRegister([...props.defectRegister, {location: props.location, defects:defectList, id:locationCounter++}])
        setDefectList([])
        props.onNav('LocationScreen')
    }

    return (
        <View style={styles.background}>
            <Text>{props.location}</Text>
            {defectList.map((item) =>{
                return (
                    <View style={styles.defectContainer}>
                        <Text style={styles.defectLabel}>{item.defect}</Text>
                        <View style={styles.defectDeleteContainer} >
                            <Button title="X" key={item.id} onPress={() => removeDefectHandler(item.id)}/>
                        </View>
                    </View>
                )
            })}
            <Button title='Done' onPress={saveDefectsHandler} />
            <Text>ADD DEFECT</Text>
            <InputNewDict dict={defectsDict} addInputHandler={addDefectHandler} />
            {defectsDict.map((item) =>{
                return (
                    <Button title={item} key={item.index} onPress={() => addDefectHandler(item)} />
                )
            })}
            
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        width: '100%',
        padding: 20
    },
    defectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    defectLabel: {
        flex: 1
    },
    defectDeleteContainer: {
        flex: 1
    },
    inputBox: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10
    },
    deleteButton: {
        width: 20
    }
})

export default DefectScreen;