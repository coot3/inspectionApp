import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Modal, TouchableOpacity, FlatList, ScrollView, Item} from 'react-native';


import InputNewDict from '../components/InputNewDict'


const locationDict = [
    'Driveway',
    'Elevation',
    'Pool Area',
    'Boundary Fence',
    'Boundary Wall',
    'Shed',
    'Boundary',
    'Bedroom',
    'Hallway',
    'Garage',
]


const DefectRegisterScreen = props => {

    const [ modalVisible, setModalVisible ] = useState(false)
    const [ preBearingLocation, setPreBearingLocation ] = useState('')
    const [ external, setExternal ] = useState(true)

    
    const addNewLocationHandler = (locationToBe) => {
        setPreBearingLocation(locationToBe);
        setModalVisible(true);
    }

    const addBearingHandler = (bearing) => {
        setModalVisible(false)
        props.setLocation(`${bearing} ${preBearingLocation}`)
        props.onNav('DefectScreen')
    }


    const removeLocationFromRegisterHandler = (itemId) => {
        props.setDefectRegister(defectRegister => {[]
            return defectRegister.filter((item) => item.id !== itemId);
        }
        )
    }


    return (
        <View style={styles.background}>
            
            <FlatList
                data={props.defectRegister}
                style={styles.scrollContainer}
                initialScrollIndex={props.defectRegister.length - 1}
                renderItem={({item})  => (
                <View>
                    <View style={styles.locationContainer}>
                        <Text>{item.location}</Text>
                        <Button title="X" key={item.id} onPress={() => removeLocationFromRegisterHandler(item.id)}/>
                    </View>
                    <View >
                        {item.defects.map(item2 => {
                            return (
                                <View style={styles.defectsInRegisterContainer}>
                                    <Text>{item2.defect}</Text>    
                                </View>
                            )
                        })}
                    </View>
                </View>)}
                keyExtractor={item => item.id}
            />
                {/* {displayDefectRegister} */}
            <Text>ADD SUBJECT LOCATION</Text>
            <View style={styles.externalInternalContainer}>
                <View style={styles.externalInternalButton}>
                    <Button title='External' />
                </View>
                <View style={styles.externalInternalButton}>
                    <Button title='Internal' />
                </View>
            </View>
            <InputNewDict dict={locationDict} addInputHandler={setPreBearingLocation} setModalVisible={setModalVisible} bearingNeeded='yes'/>
            <View style={styles.defectOptionsContainer}>
                {locationDict.map((item) =>{
                    return (
                        <View style={styles.defectButton}>
                            <Button title={item} key={item.index} onPress={() => addNewLocationHandler(item)} />
                        </View>
                    )
                })}
            </View>
            <Modal visible={modalVisible} animated={false} transparent={true} transparent={true}>
                <View style={styles.bearingContainer}>
                    <Text>{preBearingLocation}</Text>
                    <View style={styles.bearingButtonRow}>
                        <TouchableOpacity onPress={() => addBearingHandler('North')} style={styles.bearingButton} ><Text>N</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => addBearingHandler('North East')} style={styles.bearingButton} ><Text>NE</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => addBearingHandler('East')} style={styles.bearingButton} ><Text>E</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => addBearingHandler('South East')} style={styles.bearingButton} ><Text>SE</Text></TouchableOpacity>
                    </View>
                    <View style={styles.bearingButtonRow}>
                        <TouchableOpacity onPress={() => addBearingHandler('South')} style={styles.bearingButton} ><Text>S</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => addBearingHandler('South West')} style={styles.bearingButton} ><Text>SW</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => addBearingHandler('West')} style={styles.bearingButton} ><Text>W</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => addBearingHandler('North West')} style={styles.bearingButton} ><Text>NW</Text></TouchableOpacity>
                    </View>
                    <View style={styles.bearingButtonRow}>
                        <TouchableOpacity title="None" onPress={addNewLocationHandler} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        width: '100%',
        padding: 20
    },
    scrollContainer: {
        height: 400
    },
    externalInternalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    externalInternalButton: {
        flex: 1,
        width: '100%'
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gold',
        padding: 5,
        borderRadius: 10,
    },
    defectOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    defectsInRegisterContainer: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 5,
    },
    defectButton: {
        marginVertical: 5
    }, 
    locationDeleteContainer: {
        flex: 1
    },
    deleteButton: {
        width: 20
    },
    bearingContainer: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bearingButtonRow: {
        width: 300,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginVertical: 10
    },
    bearingButton: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default DefectRegisterScreen;